import home from './home.svelte'
import hero from  './hero.svelte'
import about from './about.svelte'
import showcase from './showcase.svelte'
import banner from './banner.svelte'
import feature from './feature.svelte'
import stories from './stories.svelte'

/** @type {any} */
const Home = home

Home.Hero = hero
Home.About = about
Home.Showcase = showcase
Home.Banner = banner
Home.Feature = feature
Home.Stories = stories

export default Home
