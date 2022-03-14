import Image from 'next/image'
import { v4 as uuid } from 'uuid'
import * as S from './styled'
const instagram = '/instagram.svg'
const facebook = '/facebook.svg'
const whatsapp = '/whatsapp.svg'
const links = [
  {
    title: 'instagram',
    url: 'https://instagram.com/dita.atelie.chinelos',
    icon: instagram
  },
  {
    title: 'facebook',
    url: 'https://facebook.com/ditachinelos',
    icon: facebook
  },
  {
    title: 'whatsapp',
    url: 'https://wa.me/c/553488927023',
    icon: whatsapp
  }
]
const SocialMedia = () => {
  return (
    <S.Wrapper>
      {links.map((item) => {
        return (
          <li key={uuid()}>
            <S.Item href={item.url} target="_noblank">
              <span>{item.title}</span>
              <Image
                src={item.icon}
                alt={`Icone do ${item.title}`}
                height={24}
                width={24}
              />
            </S.Item>
          </li>
        )
      })}
    </S.Wrapper>
  )
}

export default SocialMedia
