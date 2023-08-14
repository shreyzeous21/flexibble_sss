"use client"
import React, {  useEffect, useState } from 'react'
import { getProviders } from 'next-auth/react'


type Provider={
  id:string; name:string; type:string; signinUrl:string; callbackUrl:string; signinUrlParams:Record<string,string> | null;
}
type Providers=Record<string,Provider>;

const AuthProviders = () => {
  const [providers,setProviders] = useState<Providers | null >(null);
  useEffect(()=>{
    const fetchProviders=async()=>{
      const res=await getProviders();
      setProviders(res)
    }
    fetchProviders()
  },[])
  if(providers)
  {
    return (
      <div>
        {Object.values(providers).map((provider:Provider,i)=>(
          <button>{provider.id}</button>
        ))}
      </div>
    )
  }
}

export default AuthProviders