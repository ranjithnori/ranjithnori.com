import { BlogPosts } from 'app/components/posts'

export default function Page() {

  const sections = [{
    'title': 'Senior Front-End Engineer',
    'description': (
      <p>With nearly a decade of experience crafting pixel-perfect user interfaces,
      I bring a passion for clean code and elegant solutions to every project.</p>
    )
  }, {
    'title': 'Philosophy',
    'description': (
      <p>
      At the core of my approach is a fundamental principle: I create software for humans, not machines. This drives my commitment to translating designs into pixel-perfect UIs that are both visually striking and highly functional.
      </p>
    )
  }, {
    'title': 'Engineering Culture',
    'description': (
      <ul className='list-disc list-inside'>
      Beyond coding, I'm passionate about fostering strong engineering practices:
      <li>
        Thorough code reviews to maintain quality and share knowledge
      </li>
      <li>
        Establishing efficient processes to streamline development
      </li>
      <li>
        Nurturing a culture of continuous learning and improvement
      </li>
      </ul>
    )
  }, {
    'title': 'Beyond Code',
    'description': (
      <ul className='list-disc list-inside'>
        When I'm not immersed in front-end development, you can find me:
      <li>
        Listening to veteran investors like Warren Buffet on stock markets.
      </li>
      <li>
        Current obsession: Ratan Tata, JRD Tata
      </li>
      <li>
        Currently reading: "The Little Book That Builds Wealth" by Pat Dorsey
      </li>
      </ul>
    )
  }, {
    'title': "Let's Connect",
    'description': (
      <p>
      I'm currently not looking out for new opportunities as such, hit me up to chat regardless:
      ranjithnori[at]gmail[dot]com
      </p>
    )
  }]

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Ranjith's Corner On The Internet
      </h1>
      {sections.map(s => (
        <div key={s.title} className='mb-[12px]'>
          <h2 className="font-bold">
            {s.title}
          </h2>
          {s.description}
        </div>
      ))}
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
