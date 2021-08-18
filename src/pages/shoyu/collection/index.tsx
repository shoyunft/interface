import Image from 'next/image'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Header from '../../../components/shoyu/Header'
import Footer from '../../../components/shoyu/Footer'
import Button from '../../../components/shoyu/Button'

import GradientBack from '../../../assets/shoyu/gradient_back.png'
import ImageCard from '../../../components/shoyu/ImageCard'
import SimpleImageCard from '../../../components/shoyu/SimpleImageCard'
import ProfileCard from '../../../components/shoyu/ProfileCard'

export default function Collection() {
  return (
    <div className="flex flex-col">
      <Header height={64} balance={'1.704'} account={'levx.eth'} border={false} />
      <div className="flex flex-col sm:flex-row relative p-10 sm:my-60">
        <div className="absolute gradient-back">
          <Image src={GradientBack} height={475} alt="Gradient Back" />
        </div>
        <div className="flex flex-col sm:flex-row w-full">
          <div className="flex-1">
            <div className="flex cursor-pointer items-center">
              <ChevronLeftIcon width={20} height={20} />
              <div className="ml-2">Back</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="font-ivar text-5xl sm:text-7xl">United Visual Artists Experience art</div>
            <div className="flex mt-10">
              <div className="flex-1">
                <div className="mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </div>
                <Button height={40} color={'#000000'} bcolor={'#000000'} title={'Follow'} />
              </div>
              <div className="flex-1 hidden sm:flex"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row pt-5 ml-5 sm:ml-20 mr-20 sm:mr-10">
        <SimpleImageCard img={'test13'} year={2020} />
      </div>
      <div className="flex flex-col sm:flex-row m-5 sm:m-10 sm:pt-5">
        <div className="flex-1 text-3xl sm:text-5xl font-ivar flex items-center sm:mr-20 py-20 sm:py-0 ml-20">
          “I don’t want to set borders to anything I do as an artist.”
        </div>
        <div className="flex-1 mr-20 sm:mr-10">
          <SimpleImageCard img={'test15'} year={2020} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row ml-20 sm:ml-10 mr-5 sm:mr-96">
        <SimpleImageCard img={'test21'} year={2020} />
      </div>
      <div className="flex flex-col sm:flex-row m-5 sm:m-10 sm:pt-5 sm:mb-20">
        <div className="flex-1 sm:ml-20 mr-20 sm:mr-80 mb-5 sm:mb-0">
          <SimpleImageCard img={'test22'} year={2020} />
        </div>
        <div className="flex-1 ml-20">
          <SimpleImageCard img={'test14'} year={2020} />
        </div>
      </div>
      <div className="border-t border-gray-600 justify-between m-10 pt-10 hidden sm:flex">
        <div>Hibiki’s work on auction</div>
        <div className="flex items-center cursor-pointer">
          <div>Explore more</div>
          <div className="ml-2">
            <ChevronRightIcon width={20} height={20} />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 justify-between m-5 pt-5 flex sm:hidden">Sort content:</div>
      <div className="flex flex-col sm:grid sm:grid-cols-4 m-5 sm:m-10">
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test13'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test06'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test14'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="pt-5">
          <ImageCard img={'test15'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row p-5 sm:p-10 sm:pb-40 border-b border-gray-600">
        <div className="flex-1 border-t border-gray-600 pt-5 sm:mr-40 mt-10 sm:mt-0">
          <div className="font-ivar text-3xl sm:text-5xl">Related creators</div>
          <div className="flex flex-col mt-10">
            <ProfileCard
              img={'avatar01'}
              name={'Paul Robertson'}
              id={'probzzzzz'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
              darktheme={false}
            />
            <ProfileCard
              img={'avatar02'}
              name={'Michael Sidofsky'}
              id={'mindzeye'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
              darktheme={false}
            />
            <ProfileCard
              img={'avatar03'}
              name={'Andrew Wille'}
              id={'AndrewOptics'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
              darktheme={false}
            />
            <ProfileCard
              img={'avatar04'}
              name={'DM Castan'}
              id={'tucucumba'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
              darktheme={false}
            />
            <ProfileCard
              img={'avatar05'}
              name={'Alpha Centauri Kid'}
              id={'lphaCentauriKid'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
              darktheme={false}
            />
          </div>
        </div>
        <div className="flex-1 border-t border-gray-600 pt-5 mt-10 sm:mt-0">
          <div className="font-ivar text-3xl sm:text-5xl">Related collectors</div>
          <div className="flex flex-col mt-10">
            <ProfileCard
              img={'avatar06'}
              name={'Aure Gimon'}
              id={'auregimon'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
              darktheme={false}
            />
            <ProfileCard
              img={'avatar07'}
              name={'Vince'}
              id={'caktux'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
              darktheme={false}
            />
            <ProfileCard
              img={'avatar08'}
              name={'Ediep'}
              id={'ediep'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
              darktheme={false}
            />
            <ProfileCard
              img={'avatar09'}
              name={'Paul Robertson'}
              id={'probzzzzz'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
              darktheme={false}
            />
            <ProfileCard
              img={'avatar10'}
              name={'path'}
              id={'siinamota'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
              darktheme={false}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
