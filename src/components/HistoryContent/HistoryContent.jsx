import React, { useEffect, useRef, useState } from 'react'
import './HistoryContent.css'

const HistoryContent = () => {

    const [isShareVisible, setShareVisible] = useState(true);
  const furtherReadingRef = useRef(null); // Create a ref for the specific tag

  useEffect(() => {
    const handleScroll = () => {
      const historyContent = document.querySelector('.historyContent');
      const rect = historyContent.getBoundingClientRect();
      const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;

      // Check if the further reading section is in view
      if (furtherReadingRef.current) {
        const furtherReadingRect = furtherReadingRef.current.getBoundingClientRect();
        // Hide share buttons if the further reading section is in view
        if (furtherReadingRect.top < window.innerHeight && furtherReadingRect.bottom > 0) {
          setShareVisible(false);
        } else {
          setShareVisible(isVisible);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out this amazing history article!');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };
  const shareOnInstagram = () => {
    // Redirect to Instagram profile or share message
    window.open('https://www.instagram.com/yourusername/', '_blank');
  };

  const shareByEmail = () => {
    const subject = encodeURIComponent('Interesting History Article');
    const body = encodeURIComponent(`Check out this article: ${window.location.href}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className='historyContent d-flex justify-content-center align-items-center'>
        <div className="col-md-6">
            <h1 className='pt-5 pb-2'>History and Architecture of the Church</h1>
            <p>St. John The Evangelist Church, a.k.a The Afghan War Memorial Church, known simply as the "Afghan Church" was the first Anglican church in the Navy Nagar district and began as a small thatched chapel a kilometer south in what was then known as the "Sick Bungalows" (now the INHS Asvini). Later, this Church was built with the hope that the church's spire would serve as a useful landmark for ships entering the harbour.
            </p>
            <p>The construction of a new more permanent church in the 1840s was led by the Rev. George Piggot, Chaplain to the East India Company in Bombay. The immediate impetus for fundraising and construction was for the church to serve as the principal memorial to the casualties of the First Anglo-Afghan War. The retreat of the British forces from Kabul in 1842 was described at the time as the worst disaster suffered by the British in India. Many of the casualties of the conflict came from the East India Company's Bombay Army and military establishments located in proximity to the present church site.</p>
            <p>In March 1843, the Oxford Society for Promoting the Study of Gothic Architecture (later the Oxford Architectural and Historical Society) received a request from the Rev. Piggot asking for a design for the new church. The English architect John Macduff Derick presented his designs to the Society in November of the same year, and they met with the Society's approval. However, in June 1845 word came from India that the designs were unfit for the purpose and the building would cost too much. Eventually, plans for the quintessentially English Gothic Revival architecture of the church were designed and submitted in 1847 by English civil engineer and Gothic Revival architect, Henry Conybeare, and approved.
            The foundation stone of the church was laid on the 4 December 1847 by then-Governor of Bombay, Sir George Russell Clerk. When Conybeare stood down as town engineer in 1850, Captain C.W. Tremenheere of the Royal Engineers took on the role of superintending architect modifying certain aspects of the approved design such as reducing the pitch of the roof and height of the tower. </p>
            <p>Renowned Victorian architect William Butterfield in conjunction with students from the Sir Jamsetjee Jeejeebhoy School of Art designed the decorative tile Reredos (The ornamental screen covering the wall at the back of the altar), as well as the elegant metal screen inside at the entrance to the Nave, the exquisite wooden Choir stall, the Chancel furniture and the pews, all except the first 5 rows of which were provided with slots as gunrests.
            The imposing edifice designed in the English Gothic Revival architecture style was constructed using locally available BUFF-COLOURED BASALT (PORBUNDER STONE). Inside it is known for its wide gothic arches and beautiful stained glass windows. The chapel has a nave and aisle with a chancel 50 ft (15 m) in length and 27 ft (7 m) in width. Butterfield's tiles used for the geometric floor pattern of the chancel were imported from England. 
            The entire floor of the Nave and Aisles is in unpolished stone slabs, while the original Encaustic Tile (from England) of the Chancel was replaced in 1902 with White Grey and Black marble to match the Sanctuary Floor (laid in 1882).
            </p>
            <p>The church was consecrated on January 7, 1858 by Bishop of Bombay, John Harding and is dedicated to St. John The Evangelist. The spire cost a sum of Rs 5,65,000 and was finished on June 10, 1865. Sir Cowasji Jehangir contributed a sum of Rs 7,500 to help complete the building.
            </p>
            <img src="banner1.jpg" alt="church 3" className='img-fluid w-100' /> <br/><br/>
            <p>THE CHANCEL: The Chancel measures 50 ft (15 m) in length and 27 ft (7 m) in width and houses the main Altar from which all church services are held. Behind the Altar is the decorative tile Reredos (The ornamental screen covering the wall at the back of the altar). On the left and right walls of the Chancel are memorials to soldiers of the Bombay Army, Bengal Army and His Majesty's Army who laid down their lives in the First Anglo-Afghan War (1838-1843). A polished Brass Railing with a Kneeling step for receiving The Holy Sacraments, spans the width of the Chancel and separates the Sanctum Sanctorum from the the rest of the Chancel. 2-tiered ornate highly polished wooden Choir Stalls on both sides make up the rest of the Chancel.
            </p>
            <img src="4314.jpg" alt="church 3" className='img-fluid w-100' /> <br/><br/>
            <p>THE GREAT WEST WINDOW: Standing magnificently above the altar are 5 main stained glass panels and an upper section of ornamental motifs and 6 independent insets depicting Saints in symbolic disposition: AGNUS DEI (the Lamb of God), ST. LUKE, ST. JOHN, THE PELICAN IN HER PIETY AND ST. MATTHEW.</p> 
            <p>The Central panel shows CHRIST IN GLORY in the upper section and the CRUCIFIXION in the lower section. Two panels on either side depict Saints of the New Testament, with their faces turned towards CHRIST, holding symbols associated with their roles.</p> 
            <p>Along the base are panels depicting Biblical themes from the Old Testament, such as THE FALL OF JERICHO and THE OFFERING OF ISAAC as a sacrifice as ordered by God Almighty as a test of Abraham's obedience.</p> 
            <p>This Window bears the signature of William Wailles ("W.W.Newcastle") at the base of the Central panel, who was the pre-eminent English stained glass designer at the time and is one of his finest works.</p> 
            <p>Dimensions (Tracery and Lancets): 25 ft x 12 ft. On the West Wall on either side of the Great West Window, are triplet windows. The one on the left side has plain glass and was the original place of the church’s grand pipe organ.</p>
            <img src="P17.jpg" alt="church 3" className='img-fluid w-100' /> <br/><br/>
            <p>Names of Officers of the Bombay Army, Bengal Army and HM’s Army who lost their lives “by Sickness or by the sword” in the First Anglo-Afghan War are inscribed on the left and right walls on either side of the Great West Window.</p>
            <img src="P1.jpg" alt="church 3" className='img-fluid w-100' /> <br/><br/>
            <img src="P16.jpg" alt="church 3" className='img-fluid w-100' /> <br/><br/>
            <p>THE BARR MEMORIAL WINDOW (THE LADY CHAPEL WINDOW - 1864): On the right side of the Great West Window, behind the Lady Chapel Altar is a 3-panel Stained Glass window characteristic of 13th century stained glass work and depicting Biblical themes.</p> 
            <p>The Central panel depicts: THE CRUCIFIXION, THE RESURRECTION AND THE ASCENSION into heaven.</p> 
            <p>The flanking panels depict the familiar NATIVITY Scenes right from THE ARCHANGEL GABRIEL APPEARING TO THE VIRGIN MARY with the news that she is to give birth to the Saviour, THE BIRTH OF THE SAVIOUR in the stable surrounded by farm animals, THE ADORATION OF THE MAGI (the 3 Kings and their gifts) and THE SHEPHERDS IN THE FIELD receiving the good news of the Saviours birth.</p> 
            <p>The window is in memory of General David Barr of the Bombay Army, placed by his brother, Colonel Barr. The family 'Coat of Arms' carrying the motto: 'PRASTO ET PRESTO' is depicted in the lower section of the central panel.</p>
            <img src="P18.jpg" alt="church 3" className='img-fluid w-100' /> <br/><br/>
            <p>The GREAT EAST WINDOW (OPP-ALTAR WINDOW, 1862): Sits majestically above the main entrance of the church and consists of 3 stained glass panels of exquisite design. Each panel depicts Biblical narratives painted with ornate 'Medallions' arranged in a backdrop of highly stylized geometric-foliate design in striking cobalt blue and red colours that is representative of the 13th century style.</p> 
            <p>The Central panel illustrates the themes of ANNUNCIATION, SHEPHERDS RECEIVING THE GOOD NEWS OF CHRIST'S BIRTH, THE BIRTH OF CHRIST, MARY'S VISIT TO ELIZABETH, THE PRESENTATION OF JESUS IN THE TEMPLE, THE JOURNEY OF THE MAGI, THE MAGI BEARING GIFTS, FLIGHT FROM EGYPT, JESUS IN THE TEMPLE and right at the top the BAPTISM OF JESUS CHRIST.</p> 
            <p>The adjacent panels depict the 16 PROPHETS OF ISRAEL. They are almost identically attired and are seen carrying a scroll each, (possibly the message of the arriving Messiah). A glass plaque at the base of the Left and Right Lancets read: IN MEMORY OF HUGH ATKINSON.</p>
            <p>Dimensions:</p>
            <p>a) Central panel: 26.5 ft x 3 ft.</p> 
            <p>b) Flanking panels: 22 ft x 2 ft each.</p>
            <p>Below the Great East Window, the names of Officers and non-commissioned officers of the Bombay Army who laid down their lives in the Second Anglo-Afghan War (1878-1880) are engraved along with the names of their respective Battalions and regiments.
            </p>
            <img src="P19.jpg" alt="church 3" className='img-fluid w-100' /> <br/><br/>
            <p>THE NORTH AND SOUTH AISLE WINDOWS (1865 and 1932-1937): The South and the North Aisles on either side of the central nave have 21 long windows each and are in sets of 3 Stained glass panels in each Bay. Every alternate panel has a shutter which can be opened for ventilation in the lower section. Each panel is 'crowned' by a Head piece in stained glass. An interesting fact is that every Head piece is unique and different in design from each other.</p>
            <img src="4499.jpg" alt="church 3" className='img-fluid w-100' /> <br/><br/>
            <p>THE POOR MAN'S BIBLE: Stained glass in churches was called the Poor Man's Bible as it allowed people who could not read, the opportunity to see scenes and important events from the Bible portrayed in the stained glass. The birth of the Saviour and the nativity scenes, Jesus's Ministry and important Biblical events, His Crucifixion, Death, Arising from the grave and His Ascension into Heaven are all portrayed in the stained glass panels of this Church.
            </p>
            <img src="4245.jpg" alt="church 3" className='img-fluid w-100' /> <br/><br/>
            <p>THE REV. PHILIP ANDERSON MEMORIAL WINDOW (THE BAPTISTERY WINDOW, 1858): Situated on the left aisle, just inside the main entrance of the church, this is a 'Triple Lancet light' window of stained glass panels and is in memory of Rev. Philip Anderson, the first parish priest of this Church, who served for 7 years and who lost his life at sea when his ship was sunk on its return to India with the first set of stained glass panels from England.</p> 
            <p>An inscription below the window reads : TO THE MEMORY OF PHILIP ANDERSON, PASTOR OF COLABA, BOMBAY, BORN 25TH MAY, 1816, DIED 13TH DECEMBER, 1857.</p>
            <p>The window is at the east end of the South Wall where the Baptistery was earlier to be located. Hence, the stained glass depicts all Biblical themes related to Baptism.</p> 
            <p>The Central Light illustrates the BAPTISM OF JESUS BY ST. JOHN, JESUS BLESSING THE CHILDREN, JESUS' NARRATIVE TO NICHODEMUS, the BAPTISM OF THE CENTURION BY ST. PETER, and THE BAPTISM OF THE ETHIOPIAN BY ST. PHILIP.</p>
            <p>The Lancets on the right and the left sides also portrays Baptism themes along with other stories from the bible like JESUS WALKING ON THE WATER and JESUS PRAYING IN THE GARDEN OF GETHSEMANE ON THE NIGHT BEFORE HIS CRUCIFIXION WHILE HIS DISCIPLES SLEPT.</p>
            <img src="P15.jpg" alt="church 3" className='img-fluid w-100' /> <br/><br/>
            <p>THE ONE-OF-A-KIND PEWS: This being a former garrison Church, soldiers and officers would attend a church service in the morning as part of their daily routine. For the convenience of rifle carrying soldiers, the church pews have semi-circular slots cut out into which the rifles could be rested and prevented from falling. The first 5 rows of pews at the front which were reserved for officers, do not have these cut-outs as the officers only carried holstered hand guns. Some pews also have circular cut-outs which allowed regimental colours to be held in place.</p>
            <img src="P3.jpg" alt="church 3" className='img-fluid w-100' /> <br/><br/>
            <img src="P9.jpg" alt="church 3" className='img-fluid w-100' /> <br/><br/>
        </div>
    </div>
  )
}

export default HistoryContent