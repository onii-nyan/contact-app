export const isEven = (n: number) => n % 2 === 0

export const isEvenColorBG = (n: number) => {
  if (isEven(n)) {
    return "bg-[#f5fafa] border-[#f5fafa]"
  }
  return "bg-white border-white"
}