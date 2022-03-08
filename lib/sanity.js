import sanityClient from '@sanity/client';
export const client = sanityClient({
    projectId: 'qzzhunmk',
    database: 'production',
    apiVersion: '2022-3-4',
    token: 'sk3BzGsa9jihqlhLIQll5d004GE1qPY7OdBJoFg8gcPjjozys190C5jXjoaQozYgG9kY8gOfAAYupKt9J1suFXHfOOIUGMRMgmXc5wKBCKR8fFzBh6sI269OTB8GwW7fbmyt0x3v08Eownor7ho8aVNu908SdnJMhvnQ6ErHRx0r6Rcs9Z4B',
    useCdn: false,
})