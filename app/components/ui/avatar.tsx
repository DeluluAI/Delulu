import React from 'react';
import Image from 'next/image';

interface AvatarProps {
    imageUrl: string;
    altText: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText }) => {
    return (
        <div className="relative w-12 h-12 rounded-full bg-gray-200">
            <Image 
            width={75} 
            height={75} 
            className="w-full h-full rounded-full object-cover" 
            src={imageUrl} 
            alt={altText} />
        </div>
    );
};

const AvatarRow: React.FC<{ avatars: AvatarProps[] }> = ({ avatars }) => {
    return (
        <div className="flex items-center ml-4">
            {avatars.map((avatar, index) => (
                <div key={index} className={`relative z-${10 - index} -ml-4`}>
                    <Avatar imageUrl={avatar.imageUrl} altText={avatar.altText} />
                </div>
            ))}
        </div>
    );
};

export { Avatar, AvatarRow }
