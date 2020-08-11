# Nextjs Issue Reproduction

To get started, `npm run bootstrap` then `npm run example`. There should be a number of `Critical dependency: the request of a dependency is an expression` errors. These disappear if the unused import within `getStaticProps` is removed. This import has no side effects, and [indicates this specifically in its package.json](https://github.com/hashicorp/next-mdx-remote/blob/master/package.json#L63). The hooks error still appears though.
