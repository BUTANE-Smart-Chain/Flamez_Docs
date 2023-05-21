import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '93f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5a6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'e08'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd18'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '18f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'dd3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'af1'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '8e3'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '389'),
    exact: true
  },
  {
    path: '/develop',
    component: ComponentCreator('/develop', '277'),
    routes: [
      {
        path: '/develop',
        component: ComponentCreator('/develop', '553'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/api',
        component: ComponentCreator('/develop/api', '444'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/api/cosmos-grpc',
        component: ComponentCreator('/develop/api/cosmos-grpc', '954'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/api/ethereum-json-rpc',
        component: ComponentCreator('/develop/api/ethereum-json-rpc', 'ab1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/api/ethereum-json-rpc/methods',
        component: ComponentCreator('/develop/api/ethereum-json-rpc/methods', '68b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/api/networks',
        component: ComponentCreator('/develop/api/networks', '61b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/api/snapshots-archives',
        component: ComponentCreator('/develop/api/snapshots-archives', '936'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/api/tendermint-rpc',
        component: ComponentCreator('/develop/api/tendermint-rpc', 'c08'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/backend',
        component: ComponentCreator('/develop/backend', '84b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/frontend',
        component: ComponentCreator('/develop/frontend', 'b9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/mainnet',
        component: ComponentCreator('/develop/mainnet', 'a7b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/smart-contracts',
        component: ComponentCreator('/develop/smart-contracts', '296'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/smart-contracts/list-evm-extensions',
        component: ComponentCreator('/develop/smart-contracts/list-evm-extensions', '1d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/testnet',
        component: ComponentCreator('/develop/testnet', '3df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/testnet/auditing',
        component: ComponentCreator('/develop/testnet/auditing', '43a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/tools',
        component: ComponentCreator('/develop/tools', '5dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/tools/butane-name-service',
        component: ComponentCreator('/develop/tools/butane-name-service', 'a1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/tools/client-integrations',
        component: ComponentCreator('/develop/tools/client-integrations', 'ecd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/tools/contract-verifications',
        component: ComponentCreator('/develop/tools/contract-verifications', '9c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/tools/explorers',
        component: ComponentCreator('/develop/tools/explorers', '26c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/tools/indexers',
        component: ComponentCreator('/develop/tools/indexers', 'bde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/tools/oracles',
        component: ComponentCreator('/develop/tools/oracles', '763'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/develop/tools/tools-plugins',
        component: ComponentCreator('/develop/tools/tools-plugins', 'a4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c23'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'bd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/protocol',
    component: ComponentCreator('/protocol', 'de6'),
    routes: [
      {
        path: '/protocol',
        component: ComponentCreator('/protocol', '966'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/use',
    component: ComponentCreator('/use', 'd0f'),
    routes: [
      {
        path: '/use',
        component: ComponentCreator('/use', '962'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/use/affilate',
        component: ComponentCreator('/use/affilate', '2fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/use/faq',
        component: ComponentCreator('/use/faq', '6cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/use/roadmap',
        component: ComponentCreator('/use/roadmap', 'b03'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/use/tokenomics',
        component: ComponentCreator('/use/tokenomics', 'c84'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/use/transfer-tokens',
        component: ComponentCreator('/use/transfer-tokens', 'cf1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/use/transfer-tokens/fees',
        component: ComponentCreator('/use/transfer-tokens/fees', '28f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/use/transfer-tokens/maker',
        component: ComponentCreator('/use/transfer-tokens/maker', '96b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/use/transfer-tokens/pools',
        component: ComponentCreator('/use/transfer-tokens/pools', '27f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/use/transfer-tokens/swap',
        component: ComponentCreator('/use/transfer-tokens/swap', '757'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/use/transfer-tokens/trade',
        component: ComponentCreator('/use/transfer-tokens/trade', 'efb'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/validate',
    component: ComponentCreator('/validate', 'd26'),
    routes: [
      {
        path: '/validate',
        component: ComponentCreator('/validate', '498'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/mainnet',
        component: ComponentCreator('/validate/mainnet', 'cdc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/relayers',
        component: ComponentCreator('/validate/relayers', '30a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/security',
        component: ComponentCreator('/validate/security', '92b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/security/tendermint-kms',
        component: ComponentCreator('/validate/security/tendermint-kms', 'f5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/security/validator-security-checklist',
        component: ComponentCreator('/validate/security/validator-security-checklist', 'd69'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/setup-and-configuration/configuration',
        component: ComponentCreator('/validate/setup-and-configuration/configuration', 'e80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/setup-and-configuration/disk-usage-configuration',
        component: ComponentCreator('/validate/setup-and-configuration/disk-usage-configuration', '1b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/setup-and-configuration/faq',
        component: ComponentCreator('/validate/setup-and-configuration/faq', '5a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/setup-and-configuration/mempool',
        component: ComponentCreator('/validate/setup-and-configuration/mempool', 'caa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/setup-and-configuration/run-a-validator',
        component: ComponentCreator('/validate/setup-and-configuration/run-a-validator', '0de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/setup-and-configuration/state-sync',
        component: ComponentCreator('/validate/setup-and-configuration/state-sync', '31d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/stake',
        component: ComponentCreator('/validate/stake', '0e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/testnet',
        component: ComponentCreator('/validate/testnet', '23b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/upgrades',
        component: ComponentCreator('/validate/upgrades', 'a49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/upgrades/automated-upgrades',
        component: ComponentCreator('/validate/upgrades/automated-upgrades', '5a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/upgrades/hard-fork-upgrades',
        component: ComponentCreator('/validate/upgrades/hard-fork-upgrades', 'a53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/upgrades/list-of-upgrades',
        component: ComponentCreator('/validate/upgrades/list-of-upgrades', '1d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/upgrades/manual-upgrades',
        component: ComponentCreator('/validate/upgrades/manual-upgrades', '1fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/validate/upgrades/rollback',
        component: ComponentCreator('/validate/upgrades/rollback', '5f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '9ee'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
