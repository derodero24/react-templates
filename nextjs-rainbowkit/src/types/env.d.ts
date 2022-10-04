// process.env拡張
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_ENABLE_TESTNETS: boolean;
    readonly NEXTAUTH_SECRET: string;
    readonly NEXTAUTH_URL: string;
  }
}
