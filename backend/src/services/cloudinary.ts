import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

import env from '@/utils/env';

cloudinary.config({
  cloud_name: env.cloudName,
  api_key: env.cloudPublicKey,
  api_secret: env.cloudSecretKey,
  secure: true,
});

export const uploadImage = async (filepath: string, folder: string): Promise<UploadApiResponse> => {
  return await cloudinary.uploader.upload(filepath, {
    folder: `knittingApp/${folder}`,
  });
};

export const deleteImage = async (publicId: string): Promise<void> => {
  await cloudinary.uploader.destroy(publicId);
};
