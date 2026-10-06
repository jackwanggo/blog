import { createContentLoader } from 'vitepress'

export default createContentLoader('./**/*.md', {
  includeSrc: true,

  transform(rawData) {
   // console.log('rawData', rawData)
    return rawData
      .filter(item => item.url != '/about.html')
      .filter(item => !item.url.endsWith('/'))
      .map(({ url, frontmatter, src }) => ({
        title: frontmatter.title,
        date: frontmatter.date,
        url,
        description: frontmatter.description || createSummary(src)
      }))
  }
})

function createSummary(markdown) {
  if (!markdown) return ''

  const text = markdown
    .replace(/^---[\s\S]*?---/, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/^#+\s+/gm, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_>`~-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  return text.length > 150
    ? text.slice(0, 150) + '...'
    : text
}