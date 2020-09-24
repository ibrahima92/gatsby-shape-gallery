const slugify = require(`slugify`)

exports.projects = function (name) {
  const slug = slugify(name.toLowerCase())
  return `/${slug}/`
}
