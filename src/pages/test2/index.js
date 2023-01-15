import { useRouter } from 'next/router'
// import en from 'public/locales/en'
// import fr from 'public/locales/fr'

function Test2() {
  const router = useRouter()
  const { locale } = router
  // const t = locale === 'en' ? en : fr
  return (
    // <div>
    //   <main>
    //     <div>
    //       <section>
    //         <h1>{t.hero}</h1>
    //         <hr />
    //         <p>{t.description}</p>
    //       </section>
    //     </div>
    //     <article>
    //       <p>{t.p1}</p>
    //       <p>{t.p2}</p>
    //       <p>{t.p3}</p>
    //     </article>
    //   </main>
    // </div>
    <div>Test 2</div>
  )
}

export default Test2
