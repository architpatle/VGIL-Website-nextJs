export function getImageSrc(image) {
  if (!image) return "";

  return typeof image === "string" ? image : image.src;
}