import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECTID,
    dataset: process.env.SANITY_DATASET
  }
})
