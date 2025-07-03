// data.ts

export type Resource = {
  id: number;
  image: string;
  title: string;
  author: string;
  description: string;
  Link: string;
};

export const resources: Resource[] = [
  {
    id: 0,
    image: "/images/episode1queertuhan.jpg",
    author: "Far Eastern University | Gender and Development Desk",
    title: "Sari-saring queertuhan",
    description: "Episode 1: Narrative of a Transwoman.",
    Link: "https://www.youtube.com/watch?v=9TDeaDZyqmM&t=1292s",
  },
  {
    id: 1,
    image: "/images/episode1queertuhan.jpg",
    author: "Far Eastern University | Gender and Development Desk",
    title: "Sari-saring queertuhan:",
    description: "Episode 2: How parents and peers should relate to those coming out",
    Link: "https://www.youtube.com/watch?v=-lDVnVl1fmo",
  },
    {
    id: 2,
    image: "/images/adultthinglogo.jpg",
    author: "It's an adult thing!",
    title: "Sexual Orientation vs Gender Identity",
    description: "Do you know your Sexual Orientation, Gender Identity, and Expression?",
    Link: "https://open.spotify.com/episode/3rL4Q0cUBJWMLCQOlMaYoE?si=76d387a2290744e1",
  },
    {
    id: 3,
    image: "/images/comingoutstories.jpg",
    author: "It's an adult thing!",
    title: "Our Coming Out Stories",
    description: "Owning our sexuality is not always an easy journey. So let;s discuss questions about being queer, discovering your sexuality & gender identity, coming out, and upholding equal rights across all orientations.",
    Link: "https://open.spotify.com/episode/49tx5Aj3AboTKi6SA9wiSL?si=8df37f137d874213",
  },
    {
    id: 4,
    image: "/images/hiddenhomo1.jpg",
    author: "It's an adult thing!",
    title: "Hidden Homophobia Part 1",
    description: "Listen to this eye-opening episode that reveals the subtle but harmful behaviors that impact our LGBTQIA+ friends.",
    Link: "https://open.spotify.com/episode/0dd49TTTCbm8yxwz9ssa2D?si=792543885bb44313",
  },
  {
    id: 5,
    image: "/images/hiddenhomo2.jpg",
    author: "It's an adult thing!",
    title: "Hidden Homophobia Part 2",
    description: "Let's expose some \"well-meaning\" behaviors that hurt, invalidate, and discriminate against our LGBTQIA+ loved ones.",
    Link: "https://open.spotify.com/episode/72XdES9CQ07w9EzN4XpcUB?si=fa3b6a0cf35b4757",
  },

];
