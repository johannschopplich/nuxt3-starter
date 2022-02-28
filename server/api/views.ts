const startAt = Date.now()
let count = 0

export default () => ({
  views: count++,
  startAt,
})
