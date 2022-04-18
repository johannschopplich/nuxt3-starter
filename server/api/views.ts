const startAt = Date.now()
let count = 0

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineEventHandler((event) => {
  return {
    views: count++,
    startAt,
  }
})
