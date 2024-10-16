import { useEffect, useRef, useState } from 'react';

const useAudioRecorder = (endpoint: string) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      await sendAudioChunk(audioBlob);
      audioChunksRef.current = [];
    };

    mediaRecorderRef.current.start(5000);
    setIsRecording(true);

    intervalRef.current = setInterval(() => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.requestData();
      }
    }, 5000);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const sendAudioChunk = async (audioBlob: Blob) => {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'chunk.webm');

    try {
      await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });
    } catch (error) {
      console.error("Error al enviar el chunk:", error);
    }
  };

  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return { startRecording, stopRecording, isRecording };
};

export default useAudioRecorder;
