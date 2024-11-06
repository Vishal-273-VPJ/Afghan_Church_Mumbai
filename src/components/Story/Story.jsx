import React, { useEffect, useRef, useState } from 'react'
import './Story.css'

const Story = () => {
    const [isShareVisible, setShareVisible] = useState(true);
  const furtherReadingRef = useRef(null); // Create a ref for the specific tag

  useEffect(() => {
    const handleScroll = () => {
      const historyContent = document.querySelector('.story');
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
    <div className='story d-flex justify-content-center align-items-center'>
        <div className="col-md-6">
            <h4 className='pt-5 pb-2 text-center'>The Renovation Story March 2022</h4>
            <p>The comprehensive renovation of the Church was made possible through the generous support of the World Monuments Fund, India and Citi India. Work on the Church building started in March 2022 and was completed by end February 2024. A rededication service for the Church was held on 03 March, 2024.
            </p>
            <img src="A1.jpg" alt="church" className='img-fluid w-100' /><br/><br/>
            <h5>THE AFGHAN WAR MEMORIAL CHURCH</h5>
            <p>St. John the Evangelist Church, popularly known as the Afghan Church, is an Anglican heritage site affiliated to the Mumbai diocese of the Church of North India (CNI). Constructed between 1847 and 1858, with the spire being completed in 1865, this Gothic architectural masterpiece was a military base and a popular venue for marriages as well. Hence, it was called Garrison Church and Bride's Church.</p>
            <p>Designated as a Grade I heritage structure by Government of India in 2012, the church, built with locally available buff-coloured basalt and limestone, is notable for its memorial tablets, and its beautiful English stained-glass windows. The multiple Gothic arches framing its main entrance, and the majestic spire form an indispensable part of Mumbai's architectural and cultural heritage.</p>
            <p>Commissioned by the British Government, and designed by English civil engineer and Gothic revival architect Henry Conybeare, the church commemorates the dead from various regiments, including the Bombay Army, the Madras Army, the Bengal Army, Her Majesty's Army, and other regiments that participated in the First Anglo-Afghan War (1838-1842) and the Second Anglo-Afghan War (1878-1880). War memorials have been placed in the altar, nave, chancel, and the main vestibule, along with flags in showcases.
            </p>
            <img src="A2.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <h5>THE PROJECT</h5>
            <p ref={furtherReadingRef}>Over the last three decades, the Afghan War Memorial Church has been the prime focus of conservation endeavours. Our primary goal has been to preserve and showcase the monument's aesthetic and historical significance. To that end, we have dedicated ourselves to ensuring the structural stability of the building and its components. Nonetheless, due to changing climate patterns in Mumbai, these continue to endure weathering despite consistent maintenance efforts.</p>
            <p>As part of the project, we established an institutional mechanism at the level of the Pastorate Committee to oversee and facilitate visitor access, and to actively participate during conservation.</p>
            <p>The project unfolded in three distinct phases. The initial phase involved a comprehensive assessment of the building, documented in a Detailed Project Report (DPR), along with the repair and restoration of the roof. The second phase focussed on the conservation and restoration of the external structure and internal elements of the building. The third phase served as an extension of the second, with particular emphasis on enhancing the building's lighting and landscaping.</p>
            <p>These conservation and restoration efforts aim to rekindle interest in preserving the building's historical, architectural, artistic and cultural significance, while potentially revitalising its diminishing congregation. At present, the church caters to a broader constituency of stakeholders by hosting a range of cultural events all year long.
            </p>
            <img src="A3.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <h5>CONSERVATION OF THE CHURCH</h5>
            <p>Built in the neo-Gothic style, the Afghan Church is imposing in form. Of substantial thickness, its walls are surfaced with tightly laid Kurla stone and buff-coloured basalt (likely sourced from Jogeshwari- Malad Quarries) on the exterior, while the interior is adorned with Porbunder limestone.</p>
            <p>The monument faced multiple challenges like significant rising dampness in the walls and flooring, water leakage through walls, water accumulation at the main entrance gate since the road level is higher than the site, and the accumulation of grime deposits on the surface. The deterioration of the stone was attributed to hard cement or epoxy pointing, the presence of salt efflorescence, and the growth of plants at various locations. Together, these issues posed a considerable threat to the structural integrity and aesthetic appeal of the monument.</p>
            <p>Addressing these challenges required a thorough understanding of both the construction materials and techniques employed in the monument's original design, and the intent of the architects. The conservation efforts were aimed at rectifying these immediate concerns by employing solutions that would ensure the longevity of the structure and its resilience against similar issues in the future.
            </p>
            <img src="A4.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <h5>EXTERIOR</h5>
            <p>ROOF: Since its original construction, the Afghan Church's roofing system, featuring teak timber trusses on stone pilasters, had never been comprehensively evaluated. Decades of persistent water ingress led to decay in the timber elements and accelerated deterioration of the supporting stone masonry. Deemed impractical to dismantle, restoration was, nonetheless, achieved in situ before the monsoons.</p>
            <p>Some of the challenges addressed were replacing the wall plates and rafters, scraping the structural members, revealing the original double wall plates, internal polishing, and restoring the timber sprockets. The roof was repaired while maintaining the authenticity and integrity of the original structure. These interventions not only addressed immediate decay issues but also restored the original structural elements for long-term stability and resilience.</p>
            <img src="A5.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>SPIRE: Sir Cowasji Jehangir Readymoney generously
            provided additional funds for the spire that was completed in 1865, and stands at an impressive height of 210 ft. Adorned with a finial and a Latin cross, and a lightning conductor at the pinnacle, the spire serves as a beacon for seafarers and vessels heading towards Bombay Harbour, adding an element of functionality as well to the historically significant restored structure</p>
            <p>BELL TOWER: At an impressive height of approximately 60 mts, the bell tower is a crucial component of the church. Employing uniquely designed scaffolding to facilitate working at heights, meticulous restoration efforts were undertaken to address deteriorated stone elements, and clean and grout the stone masonry.
            </p>
            <img src="A7.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>PORCH: The construction of the porch dates back to 1865 when it was erected under the patronage of Chaplain Rex Maule, who personally contributed Rs. 6,500 towards its realisation. Subsequently, half the sum was reimbursed by the government.</p>
            <p>Comprising stone masonry adorned with pointed arches supporting its flat roof, the porch had suffered from deterioration over time, evident in the decayed timber joists and ladi-coba flooring laid in cement, which led to leakage issues. A meticulous restoration effort that entailed dismantling and re-laying the roof slab using lime, along with the repair of the spoiled timber joists, was undertaken. Additionally, the precarious stone parapet was meticulously reassembled, piece by piece, to ensure its stability.</p>
            <img src="A6.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <h5>STAINED GLASS CONSERVATION</h5>
            <img src="A9.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>The Afghan Church has among the largest collections of original English stained-glass windows in India. Commissioned by multiple patrons during the construction of the church from three renowned Victorian stained-glass studios in the United Kingdom, these windows were imported and installed in the church-a rarity in the colonial period.</p>
            <img src="A10.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>The clerestory windows, showcasing the rare Victorian pattern glass, were crafted by James Powell & Sons. The General David Barr Memorial Window was made by the studios of John Scott & Son, Carlisle. The East and West windows were designed and fabricated by William Wailes, a notable nineteenth- century, stained-glass artist. However, climatic conditions have taken a toll on several individual panels, resulting in damages such as breakage, buckling, lead-came fatigue, and missing glass. To address these issues, the stained-glass conservation approach prioritized minimal intervention and reversible techniques. Preservation efforts involved comprehensive photo documentation, benchmarking, and meticulous recording of the leading process. The primary objective was to conserve the original materials when stable and in good condition, thereby ensuring the lasting legacy of these remarkable windows.</p>
            <img src="A11.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <h5>CONSERVATION OF ARTEFACTS AND STRUCTURAL ELEMENTS</h5>
            <p>The Afghan Church has numerous historically significant objects within its precinct. The preservation involved a comprehensive process encompassing extensive photo documentation, architectural and archival research, technical analysis, structural investigations and condition mapping of the artefacts and structural elements.</p>
            <p>Listed below are procedures carried out for the conservation of some artefacts and structural elements:</p>
            <p>PULPIT: The freestanding Porbunder stone pulpit, featuring six arches and a circular platform with encaustic tiles, faced challenges like cracks, corroded dowel joints, and broken elements. Each component was carefully documented and dismantled. Corroded elements were removed, gaps were consolidated, and missing sections were restored with original stones. The pulpit was then reassembled with a bespoke temporary framework to ensure perfect alignment and, thereby, its overall stability. This meticulous restoration has helped preserve the historic pulpit's integrity and aesthetic appeal.
            </p>
            <img src="A14.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>BAPTISMAL FONT: The baptismal font, a vital Christian initiation element, first placed below the Rev. Pastor Philip Anderson Memorial Window, was moved to the main vestibule area after 1858. This eight-faceted stone structure with a wooden dome-shaped cover, under- went careful restoration. The wooden surface's pigmented overcoats were removed, revealing the original wood colour. Rusty pins were treated, worn-out wooden pieces remade, and the underside received a combination of mechanical and solvent treatments, with a finishing of natural lacquer coating similar to the original.</p>
            <img src="A13.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>COLOURS: During the Second Anglo-Afghan War, British and Indian troops carried a pair of standards known as 'colours' one was the Queen's Colour and the other, the Regimental Colour. These colours, from the XIII, XIX, and XXIV Bombay Native Infantry, were displayed in vertical glass cases in the church's vestibule. Over time, the colours deteriorated to the extent that they resembled faded and jumbled scraps of fabric. Archival research guided their meticulous restoration, with textile fragments salvaged, laid out on a schematic diagram, and carefully preserved between fine net and cotton fabric. Trims and tassels were consolidated, and the colours mounted flat, with replicas installed on original poles. Today, visitors can appreciate the restored colours, and researchers can study the preserved fabric scraps in bespoke storage cases.</p>
            <img src="A34.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>STONE MEMORIAL PLAQUES: A series of nine stone arches frame the main entrance of the church. In 1882, Rev. (later Archdeacon) C.F.H. Johnston decided to include the names of those who lost their lives in the Second Anglo-Afghan War. During restoration, the stone surfaces and delicate lettering underwent a cleaning process using mildly alkaline solvent to recover the original colours.
            </p>
            <img src="A15.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>MOSAIC WALL: Until 1882, behind the altar stood three arches, originally meant to lead to another chamber. On 26 May 1882, a memorial of the XIX Regiment Bombay Native Infantry, consisting of tesserae, arrived from the United Kingdom, and was installed on the walls within these arches. The design, with floral elements rising from the floor in a geometrical pattern, extends to the base of the memorial slabs.</p>
            <p>During restoration, damages to the tesserae were arrested in a minimally invasive manner. Surface deposits and stains were removed, using a combination of physical and solvent action to ensure the preservation of surface texture and tonality levels, consistent with the surrounding unstained areas.</p>
            <img src="A16.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>METAL PLAQUES: In the church vestibule, thirteen brass memorial plaques exhibited signs of corrosion. To restore them, darkened surface coats and accumulated deposits were carefully removed, using a combination of solvents and chelating agents. The process was executed meticulously to prevent any damage to the copper alloy surface. Finally, a corrosion Inhibition layer was applied to the metal surfaces, followed by a reversible protective coat, thereby ensuring the preservation of the plaques.</p>
            <img src="A17.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>LECTERN: The brass lectern, with an eagle atop symbolising St. John the Evangelist, was placed in the Afghan Church on 2 May 1865. The lectern underwent restoration due to signs of corrosion and dark residues. Careful cleaning removed darkened surface coats and deposits, preserving the copper alloy surface. A corrosion inhibitor and a protective coat of microcrystalline wax were applied for long- term preservation.</p>
            <img src="A19.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>FLOOR PLAQUES IN CHANCEL FLOOR & SANCTUARY: The 1903 chancel floor replicates the design of the 1882 sanctuary floor featuring white marble squares bordered by brass communion rails. Larger marble squares beyond the altar rails honour four officers, and a brass cross in the centre commemorates the church's founder, Rev. George Pigott.</p>
            <p>During restoration, the marble plaques were cleaned, the inscribed and accretions-filled letterings cleared with ultrasonic ablators, and an 'invisible' intaglio inscription was rendered visible with careful Inpainting with a reversible medium. The brass cross was carefully cleaned, treated for corrosion inhibition, and received a protective coat of microcrystalline wax.</p>
            <img src="A18.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>METAL SCREEN: Installed in 1865-66, the metal screen between the vestibule and nave was crafted by renowned metal worker M.J. Higgins, who was part of Sir II School of Art in Bombay. In 1903, the chancel screen, a wrought iron and copper masterpiece, was added to honour twelve soldiers. The inscription below the step leading to the chancel lists the names of the donors, and of the soldiers in whose memory the chancel screen was erected. During restoration, surface grime was carefully removed to reveal polychromy and copper floral decorations. Missing copper elements were recreated, refitted, and the surfaces repainted, restoring the screen's original details.</p>
            <img src="A20.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <img src="A21.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>ALTAR: The altar, a medieval Gothic masterpiece, features a Porbunder limestone altar wall with marble memorial plaques. The walls, deteriorating due to salt seepage-migration of salts to the surface-were saved through the universally accepted procedure of saturating the stone with demineralised water, and applying a sacrificial clay poultice. Technical studies helped monitor the quantity of salts extracted from the stone. This treatment removed the immediate risk of further deterioration, and contributed substantially to preserving the historic structure.</p>
            <p>In the altar area stands a memorial called a reredos, erected by friends of thirteen officers, with the names of the officers inscribed on a white marble slab along its back. Supported by a wall of cut bath stone and red granite, it has a white marble cross at the centre, flanked by red granite buttresses. The sides are made of stone, resting on a plinth of Derbyshire fossil marble. The altar table, made of walnut and wainscot, has a panel painting of a lamb. During restoration, the stone surfaces were carefully treated to remove grime, stains, and other debris. The fossil marble was gently cleaned with a mild alkaline solvent, and the panel painting was conserved.</p>
            <img src="A22.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>BELLS: In 1903, to commemorate his wedding, Sir Charles Cayzer of Gartmore, Perthshire, generously gifted a set of eight bells to the church. Crafted by John Taylor & Co, Loughborough, these bells were meant for full-circle ringing and Ellacombe chiming. Despite being recognised as the best in western India, alterations and the lack of installed ringing fittings prevented full-circle ringing.</p>
            <p>Restoration efforts were focussed on reinstating the original design of the supporting structure and preserving the unique sounds of these historic bells. A corrosion inhibitor was applied after a gentle solvent treatment of the bells.</p>
            <img src="A24.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <img src="A25.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>MEMORIAL CROSS: The memorial cross, made from Porbunder stone and situated to the left of the church, has inscribed marble plaques on each of its four facets. The restoration process began with a thorough recording of weathered surfaces, microbiological growth, stains, chipped areas, previous repairs, and other objective signs of distress on the stone. This documentation informed the conservation and restoration of the memorial cross.</p>
            <img src="A23.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <h5>COMMUNITY OUTREACH</h5>
            <img src="A26.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>We have actively collaborated with internationally renowned experts to inform our conservation decision-making processes. Specialists from The York Glaziers Trust were invited to assess the ongoing stone and glass conservation work. Alfred Fisher, a stained-glass expert, provided valuable insights during a talk on the history, design, and conservation of stained glass. To address structural conservation, we sought the expertise of Arun Menon, Professor of Structural Engineering, IIT Madras.</p>
            <img src="A27.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>Furthermore, our commitment to capacity building is evident through various workshops conducted on site, particularly for students of architecture. These workshops are designed to expose students to the diverse materials found in historic buildings, and to the challenges encountered during conservation efforts.</p>
            <img src="A28.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>This holistic approach ensures that our projects not only preserve heritage but also contribute to the education and skill development of future conservation professionals.</p>
            <img src="A29.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <h5>ENVISIONING THE FUTURE</h5>
            <p>In the past, the Afghan Church served as a venue for secular and cultural events. However, due to the monument's deteriorating state and the associated risks, several such events can no longer be held here. The ongoing restoration efforts aim to revive these cultural and community engagements. Once restored, the church can host public concerts, art shows, and other cultural events. The church grounds can also be utilised for community outreach programmes, including medical and health camps for local schools and the community.</p>
            <img src="A30.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
            <p>Encouraging local community investment in the church can play a vital role in transforming it into a key tourist attraction in Mumbai. By reinstating its role as a vibrant cultural and community hub, the Afghan Church can contribute significantly to the city's cultural landscape and touristic appeal.</p>
            <img src="A33.jpg" alt="church 3" className='img-fluid w-100' /><br/><br/>
        </div>
    </div>
  )
}

export default Story