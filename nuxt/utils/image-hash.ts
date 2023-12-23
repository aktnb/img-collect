const phash = require('sharp-phash');

const bin2hex = (bin: string) => {
  return parseInt(bin, 2).toString(16);
}

export const imageHashAsync: ((data: Buffer) => Promise<string>) = async (
  data: Buffer,
) => {
  const hash = await phash(data) as string;
  let ans = '';
  for (const bin of hash.match(/.{4}/g) ?? '') {
    ans += bin2hex(bin);
  }
  return ans;
};
