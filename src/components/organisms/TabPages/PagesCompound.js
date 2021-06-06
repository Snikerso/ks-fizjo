import React, {
  useContext,
  createContext,
  useEffect,
  useState,
  Children,
  useRef,
} from 'react';
import { StyledWrapper ,StyledWrapperTabs, StyledTab, StyledWrapperList, StyledWrapperItem} from './Styles';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import Paragraph from '../../atoms/paragraphs/Paragraph';
import Price from 'src/components/atoms/interface/Price/Price';
import Time from 'src/components/atoms/interface/Time/Time';

const WizzardContext = createContext({
  currentPage: 0,
  setCurrentPage: () => {},
});


const Tab = ({ title, page, src }) => {

  const data = useStaticQuery(graphql`

  query {
    allFile(
      filter: {
        extension: { regex: "/(png)/" }
        relativePath: { regex: "/service/i" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`)

  const image = data.allFile.edges.filter(item => item.node.base===src)[0]

  const { currentPage,setCurrentPage } = useContext(
    WizzardContext
  );

    return (
      <StyledTab  isActive={currentPage===page} onClick={()=>setCurrentPage(page)}>
        <Img  fixed={image.node.childImageSharp.fixed} alt={"lala"}/>
        <h4>{title}</h4>
      </StyledTab>
    );
};

const Item = ({ list }) => {

  const { refList } = useContext(
    WizzardContext
  );

    return (
      <StyledWrapperList ref={refList}>
          {list.map(item=>{
            return(          
              <StyledWrapperItem>
                <div>
                  <h3>{item.title}</h3>
                  <Paragraph text={item.description_short}/>
                </div>
                <div>
                  <Price price={item.price}/>
                  <Time time={item.time} />
                  <Link to={item.slug}>Więcej</Link>
                </div>
              </StyledWrapperItem>  
            )
          })}
      </StyledWrapperList>
    );
};

const Wizzard = ({ children }) => {
  const refList = useRef(null)
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(()=>{
    window.scrollTo({
      top: refList.current.offsetTop + 100,
      left: 0,
      behavior: 'smooth',
    });
  },[currentPage])


  return (
    <WizzardContext.Provider
      value={{
        refList,
        currentPage,
        setCurrentPage,
      }}
    >
      <StyledWrapper>
        {/* <StyledWrapperTabs>
            <Tab page={0} src={"service_masaze.png"} title={"MASAŻE"}/>
            <Tab page={1} src={"service_terapia_blizn.png"} title={"TERAPIA BLIZN"}/>
            <Tab page={2} src={"service_dla_kobiet.png"} title={"DLA KOBIET"}/>
            <Tab page={3} src={"service_przewlekle_bole.png"} title={"PRZEWLEKŁE BÓLE"}/>
        </StyledWrapperTabs> */}

      {Children.map(children, (child, i) => {
        if (currentPage === i) return child;
        if (Children.toArray(children).length === i) {
          return child;
        }
      })}
      </StyledWrapper>
    </WizzardContext.Provider>
  );
};

export { Item, Wizzard };
