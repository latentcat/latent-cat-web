"use client"

import Script from "next/script";

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import mixpanel from "mixpanel-browser";

import { usePathname } from 'next/navigation';

export default function MixpanelAnalytics() {

  useEffect(() => {

    mixpanel.init("2c04d59bd254d72a9b2cc88d498b4ae4", {
      // debug: true,
      // track_pageview: true,
      persistence: 'localStorage',
      api_host: "/mp",
    })

    // mixpanel.track_links("a", "click link", {
    //   "referrer": document.referrer
    // });

  }, [])

  const pathname = usePathname();

  useEffect(() => {
    mixpanel.track_pageview();
  }, [pathname]);

  return (
    <>
    </>
  )
}