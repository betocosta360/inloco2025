'use server';

import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { randomUUID } from 'crypto';

export async function uploadImage(formData: FormData) {
    const file = formData.get('file') as File;
    if (!file) return null;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Define upload directory
    const uploadDir = join(process.cwd(), 'public/uploads');

    try {
        await mkdir(uploadDir, { recursive: true });
    } catch (err) {
        // Already exists or other error
    }

    // Generate unique filename
    const extension = file.name.split('.').pop();
    const filename = `${randomUUID()}.${extension}`;
    const path = join(uploadDir, filename);

    await writeFile(path, buffer);

    // Return the public URL
    return `/uploads/${filename}`;
}
