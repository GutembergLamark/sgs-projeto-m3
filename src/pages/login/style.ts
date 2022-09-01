import styled from "styled-components";

export const LoginContaine = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    header{
        width: 100%;
        max-width: 1800px;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--color-primary);
        width: 100%;
        height: 100%;
        min-height: 120px;
    }
    h1{
        text-align: center;
        color: #ffffffff;
        font-size: 40px;
        line-height: 40px;
    }
    main{
        width: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        gap: 5rem;
        padding: 1rem;
        margin: 5rem;
    } 
    /* @media(min-width:480px){
        main{
            gap: 15rem;
        }
    } */
     @media(max-width: 900px){
        main{
            gap:2rem;
            margin:1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
    } 
    .cantaineForm{
         display: flex;
         flex-direction: column;
         align-items: center;
         width: 100%;
         max-width: 499px;
         gap: 22px;
         min-height: 412px;
         padding: 2rem 1rem;
         background: #FFFBFB;
         box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 0px 13px rgba(0, 0, 0, 0.25);
   }
  
   form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
   }
   label, input{
    width: 100%;
   }
   label{
    font-size: 20px;
    color: grey;
   }
   input{
    width: 100%;
    height: 49px;
    padding: 0 1rem;
    color: #000000;
    background-color: var(--gray-100);
   }
   p{
    color: red;
   }
   button{
        width: 100%;
        max-width: 345px;
        height: 44px;
        border-radius: 10px;
        font-size: 26px;
        background-color: var(--color-primary);
        color: #ffffffff;
   }
   span{
    color: grey;
   }
`
// export const InputView = styled.div`

//     width: 100%;
//     border-width: 1px;
//     padding: 0 10px;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-between;
// `