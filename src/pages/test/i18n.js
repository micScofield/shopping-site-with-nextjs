import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
// import en from 'public/locales/en/common.json'
// import fr from 'public/locales/fr/common.json'

function TestInternationalization() {
  const router = useRouter()
  const { locale } = router
  console.log({ locale })
  // const translationFile = locale === 'en' ? en : fr

  const { t, i18n } = useTranslation('common')
  const { t: t2 } = useTranslation('frSpecific')

  const name = 'Sanyam'

  return (
    <div>
      <div>
        <main>
          <div>
            <section>
              <h1>{t('hero')}</h1>
              <hr />
              <p>{t('description')}</p>
            </section>
          </div>
          <article>
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
          </article>
          <h2>{t2('frSpecific')}</h2>
          <section>
            <Trans i18nKey="hello">hello {{ name }}</Trans>
            <br />
            <Trans i18nKey="hello">Hello</Trans>
          </section>
        </main>
      </div>
    </div>
  )
}

export default TestInternationalization

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'frSpecific',
      ])),
    },
  }
}
