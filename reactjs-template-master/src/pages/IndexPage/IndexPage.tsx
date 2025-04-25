import { Section, Cell, Image, List, Modal, Button, Placeholder, Select  } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

import tonSvg from './ton.svg';



export const IndexPage: FC = () => {

 

  return (
    <Page back={false}>
      <List>
        <Section
          header="Hello world"
          footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
        >
          <Link to="/ton-connect">
            <Cell
              before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
              subtitle="Connect your TON wallet"
            >
              TON Connect
              
            </Cell>
          </Link>
        </Section>

        <Section>

        <Modal
  
  trigger={<Button size="m">Open modal</Button>}
>
  <Placeholder
    description="Description"
    header="Title"
  >
    <img
      alt="Telegram sticker"
      src="https://xelene.me/telegram.gif"
      style={{
        display: 'block',
        height: '144px',
        width: '144px'
      }}
    />
  </Placeholder>
</Modal>
        
          </Section>


          <Section>
          <Select header="Select" placeholder="I am usual input, just leave me alone">
        <option>One</option>
        <option>Two</option>
      </Select>

          </Section>


      </List>
    </Page>
  );
};


