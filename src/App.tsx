function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-50 to-blue-100">
      <header className="container mx-auto px-8 py-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-5xl mb-2" style={{ fontFamily: 'The Youngest, serif' }}>
              Dung Nguyen
            </h1>
            <p className="text-xl" style={{ fontFamily: 'The Youngest, serif' }}>
              My personal website
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/_damchomaynhat_1804/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://web.facebook.com/nguyen.inh.minh.dung.76095/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/dung-nguyen-977289398/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            <nav className="flex gap-6 text-lg">
              <a
                href="https://gsanan.github.io/dungabout/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
                style={{ fontFamily: 'The Youngest, serif' }}
              >
                About
              </a>
              <a
                href="https://gsanan.github.io/dungwriting"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
                style={{ fontFamily: 'The Youngest, serif' }}
              >
                Writing
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-8 py-12">
        <section className="mb-8">
          <h3 className="text-3xl mb-6" style={{ fontFamily: 'The Youngest, serif' }}>
            Writing
          </h3>
        </section>

        <section className="mb-8">
          <h3 className="text-3xl mb-6" style={{ fontFamily: 'The Youngest, serif' }}>
            Brick by brick
          </h3>
          <p className="text-base leading-relaxed max-w-4xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
            The bricks are all there. I had carefully arranged all of them into a complete structure. However, not coming to my expectations, but after a day of working all I saw was just a half-completed building, with nearly none of the bricks and their color being evenly spaced.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
            My unexpected foray into something that can be crafted, like LEGO, began after a leg burn. This injury was a bitter blow and robbed me the freedom to enjoy the tasks that once defined me: jogging and cycling. Without that I wasn't sure who I was or what I could find meaning in. But after a few months of stressing about how long it would take me to recover and return to my favourite bicycle track, I found that LEGO, or some kind of crafting structure, put my mind at ease.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
            Then, my interest grew as the LEGO sets, once being small, quickly occupied half of my room. Each set of LEGO demands constant care, teaching me that their well-being requires patience, nurturing, and meticulousness. The fragile sets were always in need of careful crafting and sticking, at the same time the pack needed to be appropriately separated, avoiding mixing different types of bricks together. After a long period of taking LEGO as an interest, I realized that regularly crafted sets are not enough as they cannot satiate my feelings all the time. Eventually, creativity came across my mind - the ultimate goal of LEGO.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
            Still, creativity was easier said than done. Brainstorming and rethinking about the structure and the type of bricks were instantly used. Alongside that, I had to rebuild the structure again and again in order to ensure its freshness. Finally, the result yielded an extravagant structure - a building inspired from lotus flower and the symbol of engineering in Vietnam, Bitexco Tower. I found myself immersed in a flow of rich, creative fulfillment. What I crafted myself always looked better than what I produced from the set, and I was glad that I had developed the patience until the harvest was truly ready. And, for the first time, I have learned to think critically and deeply.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
            The patience I learned translated into other aspects of my life, especially my studies. Embracing my homework, projects and tests during my recovery period, I recognized the importance of nurturing both my mind and body. In the garden, I learned accountability to my products and myself. This accountability, rather feeling restrictive, was empowering. It manifested as discipline, goal-setting, and achievement, and the reward was a beautifully crafted structure that can ease anyone. What began as a distraction from my burned leg taught me to embrace setbacks, nurture growth, and find beauty in the slow unfurling of progress.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
            Combining this with the love of history, I have planned to craft several structures myself inspiring by Vietnamese culture. I believe, only through this, I can spread the passion for history while also remaining creative all the time.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
            After all, LEGO bricks aren't just about building structures, they shape who we are and who we can become. Sometimes, growth begins not with a grand design, but with a single brick placed carefully in time.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-8" style={{ fontFamily: 'The Youngest, serif' }}>
            9th Jun 2025
          </p>
          <div className="flex justify-center mb-8">
            <div className="w-96 h-px bg-gray-800"></div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl mb-6" style={{ fontFamily: 'The Youngest, serif' }}>
            More than a film
          </h3>
          <p className="text-base leading-relaxed max-w-4xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
            Film, a thing that never caught my interest, maybe due to busy schedules, maybe due to the cliche that it was an exhaustive process staying at just one place. However, films sometimes can go beyond our imagination or even utmost expectations. That was what Mua Do has done so far. Not being a typical film with extraordinary action scenes, it was just a historical film; still, it captured many viewers' interest, including me. I wasn't expecting so far from this film, as a result of exposure to international films, but it really did evoke in me a sense of pride for the country, and for the great sacrifice of our grandfathers' generations to shield the country from colonizers.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
            Based on the true story of the 81-day battle at Quang Tri Citadel in 1972, the film plunges the viewer into one of the most brutal and pivotal confrontations of the War in Vietnam. It wasn't just about reclaiming land. It was about national identity, sovereignty, and influencing the outcome of the Paris Peace Accords that would reshape the fate of the country.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4 italic" style={{ fontFamily: 'The Youngest, serif' }}>
            "A nation cannot have two suns, there is only one - and that is us."
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
            This line was more than political rhetoric. It was a declaration of uncompromising conviction, a glimpse into the ideological warfare between the two opposing governments, each believing it alone represented the true Vietnam. It laid bare the impossibility of coexistence under two banners. The struggle was not just for territory, but for legitimacy.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4 italic" style={{ fontFamily: 'The Youngest, serif' }}>
            "At all costs, we must retake Quang Tri so that Hanoi has no bargaining power in the so-called Paris Peace talks."
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
            This wasn't just about capturing a ruined citadel, it was about reclaiming control of the narrative on the battlefield and at the negotiation table. The citadel, seemingly small and forgotten in thousands of years of Vietnamese history, became a symbol of power and sacrifice. That level of determination, even ruthlessness, revealed the unyielding will of the Vietnamese forces, willing to pay any price to assert their right to the nation's future.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4 italic" style={{ fontFamily: 'The Youngest, serif' }}>
            "Don't lose heart, don't give up - we will prevail!"
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
            Just moments later, many of those soldiers who said this word fell. Their final words were not cries of pain, but a defiant promise. Their deaths weren't dramatized, they were quiet, powerful, and unbearably noble.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
            The scene on the Thach Han River was especially haunting. Corpses floated thick across the water, victims of relentless enemy machine gun fire and artillery. The river, a symbol of life, had become a mass grave. Many of those who died there were students, who just reached the age of 18, who had left behind promising futures to dive headfirst into the line of fire. Many of them never returned. They were buried not in coffins, but in the earth, the water, and the memory of a nation.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
            Mua Do does not simply portray the horrors of war, it confronts them head-on. It exposes the cruelty and cowardice of the former South Vietnamese regime, but more importantly, it awakens a sense of duty in those of us who live in peace. Watching this film, I realized: I am walking right on the sweat and blood of generations before me. Their sacrifices are not abstract, they are the reason I stand here today.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-8" style={{ fontFamily: 'The Youngest, serif' }}>
            History must not be forgotten. Not in 10 years, not in 20 years, but in 1000. It is our duty to remember, preserve, and pass it on.
          </p>
          <p className="text-base leading-relaxed max-w-4xl mb-8" style={{ fontFamily: 'The Youngest, serif' }}>
            24th Aug 2025
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
