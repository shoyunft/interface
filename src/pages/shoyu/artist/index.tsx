import Image from 'next/image'

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import Header from '../../../components/shoyu/Header'
import Footer from '../../../components/shoyu/Footer'
import Button from '../../../components/shoyu/Button'

import CrystalBall from '../../../assets/shoyu/crystal_ball.png'
import ImageCard from '../../../components/shoyu/ImageCard'
import DetailCard from '../../../components/shoyu/DetailCard'

import DoubleBoxSvg from '../../../components/shoyu/DoubleBoxSvg'

export default function Artist() {
  return (
    <div className="flex flex-col">
      <Header height={64} balance={'1.704'} account={'levx.eth'} />
      <div className="flex flex-col sm:flex-row p-5 sm:p-10 justify-center">
        <div className="sm:w-1/3">
          <Image src={CrystalBall} alt="Crystal Ball" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row p-5 sm:p-10">
        <div className="flex-1">
          <div className="text-5xl sm:text-7xl font-ivar">The future frame</div>
          <div className="flex pt-10">
            <div className="flex-1">
              Nulla cursus quam suspendisse aenean vulputate. Elementum sit aliquam fermentum parturient consectetur
              ridiculus tempus. Auctor at at pellentesque ultrices sed non urna. Odio ultricies nisl quis et est
              natoque. Justo, vitae, egestas id vulputate urna. Faucibus commodo sed turpis quisque congue.
            </div>
            <div className="flex-1 hidden sm:flex"></div>
          </div>
          <div className="underline pt-10">Read more</div>
        </div>
        <div className="flex-1 flex flex-col sm:ml-40">
          <div className="flex flex-col sm:flex-row mt-10 sm:mt-0">
            <div className="flex-1">
              <div className="pl-2">Current bid</div>
              <div className="flex items-center mt-3">
                <div className="font-ivar text-5xl sm:text-7xl">1.00</div>
                <div className="ml-1">
                  <div className="uppercase">sushi</div>
                  <div className="text-gray-600">${` `}3,618.36</div>
                </div>
              </div>
            </div>
            <div className="flex-1 mt-10 sm:mt-0">
              <div className="pl-2">Instant price</div>
              <div className="flex items-center mt-3">
                <div className="font-ivar text-5xl sm:text-7xl">3.50</div>
                <div className="ml-1">
                  <div className="uppercase">sushi</div>
                  <div className="text-gray-600">${` `}3,618.36</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <div className="pl-2">Auction ending in</div>
            <div className="flex items-center mt-3">
              <div className="font-ivar text-5xl sm:text-7xl">19</div>
              <div className="ml-1">Hrs</div>
              <div className="font-ivar text-5xl sm:text-7xl ml-5">24</div>
              <div className="ml-1">Min</div>
              <div className="font-ivar text-5xl sm:text-7xl ml-5">34</div>
              <div className="ml-1">Sec</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="flex-1">
              <Button height={48} background={'#000000'} color={'#ffffff'} title={'Place a bid'} />
            </div>
            <div className="flex-1"></div>
          </div>
          <div className="flex flex-col font-bold py-5">Activity</div>
          <DetailCard id={'person'} dat={'July 9 | 15:13'} pricesushi={'25.00'} priceusd={'15.345'} darktheme={false} />
          <DetailCard id={'person'} dat={'July 9 | 15:13'} pricesushi={'25.00'} priceusd={'15.345'} darktheme={false} />
          <DetailCard id={'person'} dat={'July 9 | 15:13'} pricesushi={'25.00'} priceusd={'15.345'} darktheme={false} />
        </div>
      </div>
      <div className="flex flex-col p-5 sm:p-10">
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-20 sm:mb-20">
          <div className="flex-1 flex flex-col sm:flex-row">
            <div className="sm:w-1/3">Artist</div>
            <div className="flex-1 font-ivar text-3xl sm:text-5xl mt-5 sm:mt-0">
              <div>Hibiki</div>
              <div>Motion Designer</div>
            </div>
          </div>
          <div className="sm:w-1/3 sm:mr-40 mt-5 sm:mt-0 flex">
            <div className="flex-1">
              <div>
                Morbi at lacus amet, ullamcorper. Ultrices sagittis venenatis massa est odio cras. Pellentesque facilisi
                fames ullamcorper nulla. Morbi at lacus amet, ullamcorper.
              </div>
              <div className="py-10 underline">Read more</div>
              <div className="py-10">
                <DoubleBoxSvg width={64} height={64} fill={'#000000'} />
              </div>
            </div>
          </div>
          <div className="w-6"></div>
        </div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-4 m-5 sm:m-10">
        <div className="sm:mr-5">
          <ImageCard img={'test13'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5">
          <ImageCard img={'test06'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5">
          <ImageCard img={'test14'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div>
          <ImageCard img={'test15'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
      </div>
      <div className="flex flex-col p-5 sm:p-10 gray-back">
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-10 sm:mt-20 mb-10 sm:mb-20">
          <div className="flex-1 flex flex-col sm:flex-row text-5xl sm:text-7xl font-ivar">Similar artists</div>
          <div className="sm:w-1/3 sm:mr-40 mt-5 sm:mt-0 flex">
            <div className="flex-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
          </div>
          <div className="hidden sm:flex w-6"></div>
        </div>
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-10 sm:mt-20 mb-10 sm:mb-20">
          <div className="flex-1 flex flex-col sm:flex-row">
            <div className="sm:w-1/3">Artist</div>
            <div className="flex-1 font-ivar text-3xl sm:text-5xl mt-5 sm:mt-0">
              <div>
                Olaf Elisasson
                <br />
                Artist
              </div>
            </div>
          </div>
          <div className="sm:w-1/3 sm:mr-40 mt-5 sm:mt-0 flex">
            <div className="flex-1">
              Morbi at lacus amet, ullamcorper. Ultrices sagittis venenatis massa est odio cras. Pellentesque facilisi
              fames ullamcorper nulla. Morbi at lacus amet, ullamcorper.
            </div>
          </div>
          <ChevronDownIcon width={24} height={24} className="mt-10 sm:mt-0" />
        </div>
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-10 sm:mt-20 mb-20">
          <div className="flex-1 flex flex-col sm:flex-row">
            <div className="sm:w-1/3">Artist</div>
            <div className="flex-1 font-ivar text-3xl sm:text-5xl mt-5 sm:mt-0">
              <div>
                Ai Weiwei
                <br />
                Artist
              </div>
            </div>
          </div>
          <div className="sm:w-1/3 sm:mr-40 mt-5 sm:mt-0 flex">
            <div className="flex-1">
              Morbi at lacus amet, ullamcorper. Ultrices sagittis venenatis massa est odio cras. Pellentesque facilisi
              fames ullamcorper nulla. Morbi at lacus amet, ullamcorper.
            </div>
          </div>
          <ChevronUpIcon width={24} height={24} className="mt-10 sm:mt-0" />
        </div>
      </div>
      <div className="hidden sm:flex flex-col sm:grid sm:grid-cols-4 p-5 sm:p-10 gray-back sm:pb-40">
        <div className="sm:mr-5">
          <ImageCard img={'test13'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5">
          <ImageCard img={'test06'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5">
          <ImageCard img={'test14'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div>
          <ImageCard img={'test15'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
