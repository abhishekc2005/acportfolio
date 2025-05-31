import {createClient} from '@sanity/client'

export default createClient({
    projectId: 'e38g1hn4',
    dataset: 'production',
    apiVersion: '2025-02-06',
    useCdn: false,
})
