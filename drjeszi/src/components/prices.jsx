import React from 'react'
import Button from './button';

function Prices() {
  return (
    <div className="profession prices" id="prices">
      <h3>DÍJAZÁS</h3>
      <div className="pricesText">
      <p>Ügyvédi irodánk díjszabása a szolgáltatás hatékonyságához igazodik. Első lépésben az ügyfél megkeresése alapján egy konzultáción közösen meghatározzuk az elérendő célokat, illetve azt az eredményminimumot, amelynek elérését garantáljuk. Ez a rendszer lehetővé teszi, hogy az ügyfél érdekei és céljai, egyben a mi érdekünk és célunk is legyen</p>
      <Button text='E-mailt írok' url="mailto:jeszenkaugyved@gmail.com" class="email"/>
      </div>
    </div>
  )
}

export default Prices
