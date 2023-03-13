import crypto from "react-native-quick-crypto";

const algorithm = "aes-256-gcm";

export const encrypt = (text: string, password: string) => {
  const cipher = crypto.createCipher(algorithm, password);
  let encrypted = cipher.update(text, "utf-8", "hex") as string;
  encrypted += cipher.final("hex");
  return encrypted;
};

export const decrypt = (encrypted: string, password: string) => {
  const decipher = crypto.createDecipher(algorithm, password);
  let decrypted = decipher.update(encrypted, "hex", "utf-8") as string;
  decrypted += decipher.final("utf-8");
  return decrypted;
};
