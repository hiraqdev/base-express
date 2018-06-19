const data = (id, type, payload, rest = {}) => {
  let resp = { id, type, attributes: payload }
  if (Object.keys(rest).length >= 1) {
    resp = Object.assign(rest, resp)
  }

  return { data: resp }
}

export { data }
