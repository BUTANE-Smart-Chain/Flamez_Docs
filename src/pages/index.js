import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import Card from "../components/Card"

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Forged" description="Flamez Docs">
      <main>
        <br />
        <h1 style={{ textAlign: 'center', fontWeight: ' bold ', fontSize: '1.5em', color: '#60c9d6', textShadow: '2px 2px 2px #000000' }}>Ignite your assets, Illuminate your profits.</h1>
        <div align="center">
          <img src="img/logo.png" alt="Flamez Logo" width="1000" height="1000" style={{ margin: '20px 20px' }} />
        </div> 
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">

              <Card
                to="./protocol"
                header={{
                  label: "🔥 The Ignition Point for All Traders",
                }}
                body={{
                  label:
                    "Flamez facilitates every user to kindle their own token trades",
                }}
              />

              <Card
                to="./use"
                header={{
                  label: "💱 Discover Flamez",
                }}
                body={{
                  label:
                    "Immerse yourself in the Flamez protocol and learn how to spark your own crypto trading revolution",
                }}
              />

              <Card
                to="./develop/smart-contracts"
                header={{
                  label: "✨ Staking",
                }}
                body={{
                  label:
                    "Discover how to use the Flamez Staking feature to grow your crypto assets within our vibrant community",
                }}
              />

              <Card
                to="./use/tokenomics"
                header={{
                  label: "⚙️ Flamez Dynamics",
                }}
                body={{
                  label:
                    "The tokenomics of Flamez is meticulously engineered to reward holders, fostering an environment for liquidity and value to thrive simultaneously",
                }}
              />

              <Card
                to="./use/tokenomics"
                header={{
                  label: "💲 $AME Rewards",
                }}
                body={{
                  label:
                    "Flamez Rewards are strategically designed to give back to the community, rewarding holders with $AME tokens for every trade",
                }}
              />

              <Card
                to="./develop "
                header={{
                  label: "🛡️ KYC & Audit",
                }}
                body={{
                  label:
                    "Flamez is a community driven project, but we take security seriously. We are KYC verified and audited by Solidsol, a reputable smart contract auditing firm.",
                }}
              />

            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home