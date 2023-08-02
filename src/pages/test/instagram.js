import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const InstagramImage = () => {
  const [imageData, setImageData] = useState(null)

  const accessToken =
    'IGQVJWbkhjdFZA2ZADhGOFlEWG1qcVpQSWMtcE91WHF2LWF0QzRLMkUydjM3akdBOTkxR2YyZADh0bWxEa0JiSFdDaVNjdWt2SXQzQzllOTVxZA0JHbTZA2SXFmckxHb2xLcDBsSkx2YXd6OHA4S3dDTmYxdgZDZD'
  const mediaId = '18369925549012902'
  const postId = 'CuZmhmmOO8t'

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const userId = await axios.get(`
                https://graph.instagram.com/me?fields=id&access_token=${accessToken}
        `)

        // Insta suggests to use this API -
        /*
        "https://graph.instagram.com/v17.0/17841400049237227/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=IGQVJWbkhjdFZA2ZADhGOFlEWG1qcVpQSWMtcE91WHF2LWF0QzRLMkUydjM3akdBOTkxR2YyZADh0bWxEa0JiSFdDaVNjdWt2SXQzQzllOTVxZA0JHbTZA2SXFmckxHb2xLcDBsSkx2YXd6OHA4S3dDTmYxdgZDZD&pretty=1&limit=25&after=QVFIUmxfOXZA2aUlJcFZADbEJ5azZA1eG90R0tjdkZASTEQxQVlzeFZAJcWVJTUlEXzg3eWpXNUxKOXZAZANi0xQzRJRFgyUDhka1VMaEVTcDFCcXlEc2M1SnVMM3dB"
        */
        const media = await axios.get(`
                https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=${accessToken}
        `)

        // const media2 = await axios.get(media.data?.paging?.next)

        // Fetch individual IG media
        const response = await axios.get(
          `https://graph.instagram.com/${mediaId}?fields=id,caption,media_type,username,media_url&access_token=${accessToken}`
        )
        console.log({ response })

        // // Hashtag search
        // const hashtag = await axios.get(`graph.facebook.com/ig_hashtag_search
        // ?user_id=${userId}
        // &q=presidio`)
        // console.log(hashtag)

        setImageData(response.data)
      } catch (error) {
        console.error('Failed to fetch Instagram image:', error)
      }
    }

    fetchImage()
  }, [])

  if (!imageData) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Image
        src={imageData.media_url}
        alt="Instagram Image"
        width={300}
        height={300}
        objectFit="cover"
      />
    </div>
  )
}

export default InstagramImage

/*
"This Sunday, you’re invited to a free family friendly fiesta in the Presidio, celebrating Latino culture and heritage. Come enjoy Aztec dancing, Spanish-language DJ and music, and of course delicious food from Presidio Pop Up vendors like Al Pastor Papi @‌alpastorpapi415, El Fuego @‌elfuego.sf, Estrellita’s Snacks @‌estrellitas.snacks, Mi Morena @‌mimorenasf, Senor Sisig @‌senorsisig, YoSoyCeviche @‌yosoyceviche and more. Parks are for everyone so let’s get everyone in the parks! Fiesta En El Parque, Sunday, July 9, 1 to 5 pm. Click the link in our bio for more info."
*/
