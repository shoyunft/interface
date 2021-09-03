import Header from '../../../components/shoyu/Header'
import Footer from '../../../components/shoyu/Footer'
import SearchBox from '../../../components/shoyu/SearchBox'

import ImageCard from '../../../components/shoyu/ImageCard'
import ProfileCard from '../../../components/shoyu/ProfileCard'

export default function Search() {
  return (
    <div className="flex flex-col">
      <Header height={64} balance={'1.704'} account={'levx.eth'} darktheme={true} />
      <SearchBox />
      <div className="flex flex-col sm:grid sm:grid-cols-4 p-5 sm:p-10 bg-black">
        <div className="sm:mr-5 pt-5">
          <ImageCard
            img={'test01'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard
            img={'test02'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard
            img={'test03'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="pt-5">
          <ImageCard
            img={'test04'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard
            img={'test05'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard
            img={'test06'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard
            img={'test07'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="pt-5">
          <ImageCard
            img={'test08'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard
            img={'test16'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard
            img={'test02'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard
            img={'test13'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="pt-5">
          <ImageCard
            img={'test07'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard
            img={'test17'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard
            img={'test18'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard
            img={'test19'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
        <div className="pt-5">
          <ImageCard
            img={'test20'}
            timeframe={'29 hrs 35 mins'}
            creator={'creatorname'}
            price={355.55}
            darktheme={true}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row p-5 sm:p-10 bg-black text-white sm:pb-40 border-b border-gray-600">
        <div className="flex-1 border-t border-gray-600 pt-5 sm:mr-40 mt-10 sm:mt-0">
          <div className="font-ivar text-3xl sm:text-5xl">Related creators</div>
          <div className="flex flex-col mt-10">
            <ProfileCard
              img={'avatar01'}
              name={'Paul Robertson'}
              id={'probzzzzz'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
            />
            <ProfileCard
              img={'avatar02'}
              name={'Michael Sidofsky'}
              id={'mindzeye'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
            />
            <ProfileCard
              img={'avatar03'}
              name={'Andrew Wille'}
              id={'AndrewOptics'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
            />
            <ProfileCard
              img={'avatar04'}
              name={'DM Castan'}
              id={'tucucumba'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
            />
            <ProfileCard
              img={'avatar05'}
              name={'Alpha Centauri Kid'}
              id={'lphaCentauriKid'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
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
            />
            <ProfileCard img={'avatar07'} name={'Vince'} id={'caktux'} pricesushi={'25.00'} priceusd={'15.345'} />
            <ProfileCard img={'avatar08'} name={'Ediep'} id={'ediep'} pricesushi={'25.00'} priceusd={'15.345'} />
            <ProfileCard
              img={'avatar09'}
              name={'Paul Robertson'}
              id={'probzzzzz'}
              pricesushi={'25.00'}
              priceusd={'15.345'}
            />
            <ProfileCard img={'avatar10'} name={'path'} id={'siinamota'} pricesushi={'25.00'} priceusd={'15.345'} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
