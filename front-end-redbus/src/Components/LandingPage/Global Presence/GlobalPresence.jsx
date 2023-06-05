
import React from 'react'
import Styles from './GlobalPresence.module.css'

const GlobalPresence = () => {
    return (
        <div>
            <div style = {{backgroundColor : "#f1f1f1"}}>
            <div className = {Styles.globalPresenceContainer}>
            <div className = {Styles.globalPresenceHeading}>OUR GLOBAL PRESENCE</div>
            <div style = {{display : "flex" , justifyContent : "space-evenly", marginTop : "60px"}}>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEX90RbOEScBOJP80hvPFisALZaXlGb/1ggAO5mlH07RECIGPJQAMZcAPpsAOpqmI1GPCHfhAAABX0lEQVR4nO3Q20ECQRRAsauLii6P/rvFT2ZOC0kJmYPdHMPKSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTuqYH3bzzW5uX6xuc36yOp2Ek3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTOuf+uPLucZ/nL6vn/LGbyweri5NwUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JS/yfsXkhAyL4FEX68AAAAAElFTkSuQmCC" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>colombia</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/mTMSiAf/////lycAgQAAAIgAAIUAAH4AAIIAAIMAAHwAAHPi4u+kpMvz8/kAAHjn5/Lt7fXd3ey5uddPT6GZmcWDg7n6+v7Ly+HIyOJERJxlZao+PponJ5L29vy0tNbW1uggIJCfn8iGhrsYGJBNTaB2drQQEIx+fripqc5ra62QkMBXV6QiIpFfX6i+vtwyMpw6Opg1NZe0gadDAAAEvUlEQVR4nO3ba3OiSBiG4UzvdDcip8YDiAdQZAIxExP//4/btzHjZH1Nze6HpVPlc1Ul0eiH9g7Q2JKHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/+gvuPYg4BqacGjCoQmHJhyacF+hSTI5LFd7uV8tD5PE9WDEF2gSHNbaGyklpVRq5Omfh8D1kBw3qaZ6pCiGVFrr/oYc6SZ3OyinTZIpdZCeevnhNyY1jf/jRXm0vejG6S7kssnObhmeNxMbcTSiEuZIt2aeZ7eancNxOWzy7NFrn3cnI/p9pbTfcmFO3ZxaeVN3A3PWJNrS5lAEmb3d5wgvt7KgoMe2kauhuWoSPdK2QHvIwt5ZpPTtQF/p+S7tVbQNPbqK4qhJRluJ17VGZB3di2yPF/o62AxdJkzbUZRt5mZwjpo0lOTY3wrtFGMPHq/vP5N+JxJHiuLomOKmycyTXinOUewLX1IYSTmW7/cpiSjpOTMno3PSJNA049TnQ4gIae8J6cVrSkWbSNdvJvRITbOPdnJO66RJo1QzM3RjaY8YMhLVVmR+JraViGhzEZn9vZnZp7kYnosmCy31+UR180oH1a4QWWyiODJxJhqajaPTpn80oee5OM130WSlVL3pZ11hJO0daiLWITUJ12KiaM+Spn9ssamVKhyMz0GTVNsDrOi6/o5fiVKLdmVis2qFLkXl27OV/rhCh1mdDj9AB01qmoftnz+Z2ir5+Cjk08JP49RfPElxHNvdpZvao2vhyVE9/AAdNHmkOfZ8ihpK2l4m4y4fJ7ryKp2M8248oe1D7vrHDc3Z++EHOHwTmojlr9tRISciHB/beZ3v87puj+OdmMiV+fUE6WI6Hr5J6amnaFEuzptK6av8GAfrKmzDah3Ex/zR798Iik1e5tGT8srBRzh8k7lSLf1ID9NlWNF5yHLcBuugLd6KNl0H87E9N0m7p+Zgj66tUvPBRzh8k2cl/fNZRzLbxut2kczXaWFXIEdFsG6TfH6KH2fnPSb3pXoefITDN3lVanpZBTDhytd12o6kNWrTg/ZPu8vKYzRV6nXwEQ7fRErvkiSLIpNWeViovokqdnmVmii6LBJE3u8D8mCcNEmqYzhbnqT2/TiOvX37Js/e6q1Hv4l9LX8+H8IyT++mCbaTK1fHkzccTz7OO8Hveafp550mWM/vct6Zn085cH7ywe3z2JTOY9O7PY/F+50b9vS++PyiP3tfPLm398WiHv15/aTs109Wd7N+gnW2G4p/uR6b3c96rMiv1u2bT9btgztat+8/3zmY989xbn6+I+7t8x18DngLPi++YYrrChhcf3IDrlO6IdqOpCpSXM/2D/11j234yXWPwy+bXOD6WO5rXkc9vdvrqAWut78N/5dx08f/3zF/fvr/7is0+WrQhEMTDk04NOHQhHv4DtcevsE1NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMT7m/cNifkUwM0UQAAAABJRU5ErkJggg==" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>india</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAIVBMVEX////OESfOESbq6urssrfMAA3NFirMABTfpKnr7+/a2tqcCwSUAAABf0lEQVR4nO3SwQ3CMAAEQSeGJNB/wYgXMlsAPGYqOK1uHBurYxz7tvOx7cdQ5Nv2bvLrs/4VTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqTejc576zOcd1YXeMxWD3G/PWEvzM1CU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9Kk5nhOVs8XvjdzZbCXb9MAAAAASUVORK5CYII=" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>indonesia</div>
                </div>
            </div>
            <div style = {{display : "flex" , justifyContent : "space-evenly" , marginTop : "60px",marginBottom : "80px"}}>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAz1BMVEX////MAAAAAGbLAAD/zADJAAD22dnpp6fZXV3ccHDUAADww8Pz0ND99PTjjY3WTU3SNDQqAFz55eUAAGr/0wD/1AAAAFUAAGT+ywDfshz/2QDbrx+mhTuJbUZdSlTwwAsdF2FDNlq1kTRPP1ewjTfmuBWXeT9jT1ERDWJ8Y0opIV+efj/RpyhUQ1ZuWE82K110XU2CaEhAM1u+mC+SdETMoygxJ1y/mTZeS1MAAF0LCGFIOVbGnixpVFBSQlePckcjHGCriTotI1zcODEAAE6PtUpiAAAH70lEQVR4nO2ca3uiRhSALaXbNu32dmZWFBQ1gOIl3mMuZqNp//9vKgMCQ2JgyJhHwPN+2LAKycP7HJgzZw7UlEIDVz8Umtq5BaWD+qRAfVKgPilQnxSoTwrUJwXqkwL1SVFpfRBxKl1v/sLVT4Xmw/o8ZbezZ6O33C43xvxu8DkO738rNh/TB3A90jVKOMzt/OH0Br/VCs5H5E0tT536GkL1Vv3EAqunD9r6K3cs+KgHoU1idU4qsGr6YKLTpDvV3jjz/uNicX3njtYatU4ZgdXSBw9bmoy7tduJhl5/43Y1np/OX6X0wZPGX7bUbilvRwuAxXXyk1vU54vp8aFHG22xkRacj0djhfTVG1zoEW2WJq/Ob69Rn6J0TM4e3SrpTtrx11Mt3oa7C9U3MPkhw80IKHAWsTESxSKsvl+oPt6etsi8HIdmuAs8NyOVHTPndXz/5fdCI6gPdO7KNQVSYzBHh51g33wKN3Urp75qlAxgz9nTdgIOYEQPMQdjehh6odWc5LNXjYIV3PAZy61QBC2ofZBmkl6wtVO1vGNwJfQN+FFjIqYATGoEexJVDyYleujxsvTBNr50ySjNwAOXouwJ7bKNKVH9AQNWlDxx3w8uRB+0uUu3kRo/CyfOpSeBNugT1c9chkTV4t/ZGV2MPpu7dKfpu07MfpSwmCrxLl9Yefoevf82VHUbjsCwMoXsVUAfP26QfVa63G6Oh4cho8e8AVjejxtPGFXJ7PBN21TF7FVBX4PLWbL3fqJ070/ooO9pN728xb9hTtnt0599wHDc1HZi9iqg75ELvtRx43DCLiVaMKfTvCMs7xpWyca/AYzZrVAxCNGmoiNw6fXBksuY61l7swNaVKWNa++ut2XGu+zwsXcDVEnL+8xlhYeucP4CVz8Wmuzo0+LgWwrW97x4pcsHmDFz/lzZ/4cMoNvwviLfxbO/b7WvhSZLn3cvi6tUbbFzBoNJUh1FTaArG/a7SD9H7lz2igsbP6OBQ/iOZfmebDupz6/001memUfp9cUKBK9d/6jl22XgQwTnW0cqu757br6WduZ1JdHsAuvj/ugqypyFemPKrq/N6XtM2/Fuoy+Nldu/3tV9MeNj9ojjf1d/mTzNnf1SN7rV1gfPXBRl7LroqU3W9kKJ2RgvjWP6TGOr22bQldA0R9ll17Lr4+qkmYV2UGZjctifHL94SfRzORFZ5iy7Pq5WNRaYcsDQMN8bNWKHxBbtJSq7Pu4WthVLmqG/fSf0wsCzusKdbGXXp8enLZq3eEODY78nkOhuni7ACukTr7R7g6tx3J92k6+Fsv5HsfmU6Ota2rvRZzqdHAZLXjL4wL2v3mocaT3lBJKxeAiWvGDFz750kZG3vVUzR16VavupYHdWyfUZ4nkfwG5kBoHHEuN3Qi/4nNDGPKPJqBL6WqLFUlBcvenNOjTNbKyX+9XzMXumO7K2Y9vUVNYHvc0ugJVcH1tujCIntTvqydqv3Hb35eFQDbCP6fOGn6BSMLh97M8dy0idRldAX5079+fUqy1ZQXkn8aNx9iNUcSm7Pj6KBGZt4VH6u/U+I1feV3p9XM2ACJ/02K8rj5MX8NifDdNcnc5l16dwHRrkRrA7iNUZiDZTkiHYgBEbd2krh7+Sp81Koq1U7OplDfiEGAq48UobW66jO9itac7Vjj+LTfY6r8VdvSLNAWydja6HoMCaHTL013ldtva28j5r2zTPWlvJSwYK63OM9QlUDcChxA766lW/L8H2j2NjCZu2ALQ0ItojWAV9XNVAze7sgVZTXfkJCdwQdr/ze1wc2EVHQ71HiGifQQX09bnwy6q6gNvcHHok2XSZTJWww2pOo6U6WDSIYJdL+fUlWqzIY3rqPLPjuNL8JIUtNpFFkMxEjxfBzBR70K0C+pQu112aXjfockvBdzRoRb0jQcLI5i+xZ2XVuRR9fKMG2aSHX7xlEfLCNl7C3maXEi5lgftL0ZfI/WjW81ihHjPsKAjzRVhT8TaPKulLNIeTayEHj81DeRVscniWaKCpF6kvaNmLEMk6wAhzbC/oDmEIs2bOByorou9Vy5RAfyOY4dQWjGY4y4B1+p2zsvoORRTx2sEiegDES6SjpxnqeZ+ohH//KjTCD6Qm/GVW7WD0Em1PuOd5XcEG1eiA0ldcjvojekZ3FDe+vHAhBzkfqSx9vY87lcSbIFRHeLFWbIH4+N+sjj4F5vz4QUxXZKmR9QiivuBkbu2kwNHw2HtcJq/e4yL6CFHV9bEEMLH+TWjDuQ7blIMfE0t/+ni0VVyfAoNesoGAUNLYjOY3/fad6/R0qrZO+Rq6qunzzqjzpn8qfIcfbZrz077Dr3r6WFllrr9tXiZUWwq+lumy9bHhYTCzGvzLI7Wx0RYbiPP9ocqkza9PzAu06d3s2Rk5q9nkk15dqtz/XGwkXzz8yS/OrUzJ4EygPilQnxSoTwrUJwXqkwL1SYH6pEB9UhRe39+F5r+v/xSa2lWxOffLSTOonbvkU25QnxSoTwrUJwXqkwL1SYH6pEB9UqA+KWrnztvLTe0LIsG5KxYIgiAIgiAIglSec/dnlpvaubuDyw0WrKRAfVKgPilQnxSoTwrUJwXqkwL1SYH6pEB9Upx7yo0gCIIgCIIgCIKk8QsiAS5USoEVFylQnxSoTwrUJwXqkwL1SYH6pEB9UmDaLEXtV0SCc0+5EQRBEARBEARBkBT+B2yI7ltfQtVIAAAAAElFTkSuQmCC" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>malaysia</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAB1FBMVEXZECP////YABbldHsAfqjbACTr6+sAeqvpzACnpGPVugDYAADaAB7YACSqgS3BkkLIDyDixgDRtwD6///5+fnHAADcACHQAADXECPZAAnRghnokAri4OC6dBDdwgDfwwDOACLJsAD08/PLPB22y741glZglHQAbzO0urdnkHgAZi9lfHAAdzmjva0AdDCDmYyLrpm+pADl5d/IqQCqhgCLqpi7f1XXdn/YqKpDjWLRABQlekoYb0HVfYG7SVAAVAB2oIZ1qIjb0NHYlpnJLTjGQErIABa6AB/MVhbRcw/OZhPJJR7jbxTlgQ/mkQncOh7gVhmDWxrKpHvJQwDj4rPOxY3HrWnDmVXo6crHt2bNs7XDaBXYpKfMOB67AADJiItJg2FGfV8qcEkAXxvI0s1YfWdPmW7SzbLj388wiVd5moaywbjBrDLAVQDNwYCFsJTAu4m6YV2UiDR9izywpEBth1alr2B2jRghepIAeLKco0W/jCEdeplLiHxHa3e4h0+8oIDPw7mDk1FycmaaopLYvqKgh2qml4eqdTSDc1qTazhuk2rfnlbksXtxnLHmwp9feYPBys+NZS1+jo85hIebs8BPi6iffzXSnQyYXg2yMDiiAADPYof3AAALCElEQVR4nO3c+1saVxoH8DmEGQiXdrgMtwAOA4yQigKpNYChiooITdM02nhJlERjNa7abreNLaapu2nSZptsu7t1s7v/7L5ngHh57T7ZH/LDHs43zyMT5gxP5uO5vANMBOGNxXSOvLmcM725f/gbDDfB4SY43ASHm+BwExxugsNNcLgJDjfB4SY43ASHm+BwExxugsNNcLgJDjfB4SY43ASHm+BwExxugsNNcLgJDjfB4SY43ASHm+BwExxugsNNcLgJDjfB4SY43ASHm+BwExxugsNNcLgJDjfB4SY43ASHm+BwExxugsNNcLgJDjfB4SY43ASHm+BwExxugvOaJt58SfcOJrJkODHo1Ut5LzchheTFZEZvjq6ONvUMbBdeC4VlE6m5ms40taE7+ph+Z0hrZtKrTam3TbT+/rtSKpUujF68e3G0kE6lpLv9/Vovm+STpab0jl5aTQ7oeX0guVrS35GapWS+h00y/WnoI8lCovP3BGzDM/2ZHjbpv7t2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" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>peru</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "data:image/png;base64,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" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>singapore</div>
                </div>
            </div>
            </div>
            </div>
            <div className = {Styles.globalPresenceContainer}>
            <div className = {Styles.globalPresenceHeading}>THE NUMBERS ARE GROWING</div>
            <div style = {{display : "flex" , justifyContent : "space-evenly", marginTop : "60px"}}>
                <div style = {{display : "flex" , flexDirection : "column", alignItems : "center"}}>
                    <div className = {Styles.countryName}>customers</div>
                    <div className = {Styles.numbers}>23 M</div>
                    <div className = {Styles.para}>redBus is trusted by over 23 million happy customers globally</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column", alignItems : "center"}}>
                    <div className = {Styles.countryName}>OPERATORS</div>
                    <div className = {Styles.numbers}>2600</div>
                    <div className = {Styles.para}>network of over 2600 bus operators worldwide</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column", alignItems : "center", paddingBottom : "40px"}}>
                    <div className = {Styles.countryName}>BUS TICKETS</div>
                    <div className = {Styles.numbers}>180+ M</div>
                    <div className = {Styles.para}>Over 180 million trips booked using redBus</div>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default GlobalPresence
// 
