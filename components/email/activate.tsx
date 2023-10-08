import {
  Html,
  Head,
  Body,
  Container,
  Preview,
  Heading,
  Button,
  Img,
  Section,
  Tailwind,
  Link,
  Column,
  Hr,
} from '@react-email/components';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

const year = new Date().getFullYear();

interface ActivateEmailProps {
  actionUrl: string;
  siteName?: string;
  githubLink?: string;
  xLink?: string;
}

const ActivateEmail = ({
  actionUrl = `${baseUrl}/login`,
  siteName = 'Project Starter',
  githubLink = 'https://github.com/jebulous',
  xLink = 'https://twitter.com/webdevjeb',
}: ActivateEmailProps) => (
  <Html lang='en'>
    <Head></Head>
    <Preview>Welcome to {siteName}!</Preview>
    <Tailwind>
      <Body className='bg-gray-100 font-sans text-base font-light'>
        <Container>
          <Section id='header' className='p-5'>
            <Link href={`${baseUrl}`} className='flex items-center gap-2'>
              <Img src={`${baseUrl}/logo.png`} alt='logo' className='h-6 w-6' />
              <span className='inline-block font-bold text-black'>
                {siteName}
              </span>
            </Link>
          </Section>
          <Section
            id='content'
            className='rounded-md border border-solid border-gray-300 bg-white p-5'
          >
            <Heading as='h1' className='mt-0 text-3xl font-semibold'>
              Welcome to {siteName}!
            </Heading>
            <Hr className='my-5 h-px border-0 bg-gray-300' />
            <p>
              Please click the button below to activate your account and get
              started.
            </p>
            <Button
              className='my-5 rounded-md bg-black px-4 py-3 text-sm text-white'
              href={actionUrl}
            >
              Activate Account
            </Button>
            <p>
              Heads up! This link expires in 24 hours and can only be used once.
            </p>
          </Section>
          <Section
            id='footer'
            className='p-5 text-sm font-normal text-gray-400'
          >
            <Column align='left'>
              &copy; {year} {siteName}. All rights reserved. | Sent with{' '}
              <Link
                href='https://www.resend.com'
                className='text-gray-400 underline'
              >
                Resend
              </Link>
              .
            </Column>
            <Column
              align='right'
              className='flex items-center justify-end gap-2'
            >
              <Link href={githubLink}>
                <Img
                  src={`${baseUrl}/github.png`}
                  alt='github'
                  className='h-6 w-6'
                />
              </Link>
              <Link href={xLink}>
                <Img
                  src={`${baseUrl}/x.png`}
                  alt='twitter'
                  className='h-5 w-5'
                />
              </Link>
            </Column>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ActivateEmail;
