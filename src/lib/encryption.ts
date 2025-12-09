import Cryptr from "cryptr";

const cryptr = new Cryptr(process.env.ENCRYPTION_KEY!);

export const encrypt = (text: string) => {
    return cryptr.encrypt(text);
};

export const decrypt = (encryptedText: string) => {
    return cryptr.decrypt(encryptedText);
};