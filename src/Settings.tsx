import { createContext } from "react";

export const AppConfig = createContext({
    'setting': {
        'apiKey': 'a96792fb6ef90130a2831330d5957e37',
        'language': 'en',
        'metric': 'standard',
        'user': {
            'auto_refetch': true,
            'fetch_interval': 300000
        }
    },
    'setSettings': (e: any) => {}
  }) 