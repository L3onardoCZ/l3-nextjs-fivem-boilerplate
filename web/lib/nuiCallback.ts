
declare global {
  interface Window {
    GetParentResourceName?: () => string;
  }
}

export const nuiCallback = async <T extends Record<string, any>>(
  endpoint: string,
  data?: T,
  cb?: (result: any) => void,

): Promise<void> => {

  try {
    const resourceName = window.GetParentResourceName?.();
    
    if (!resourceName) {
      console.error("[Menu] NUI Callback Error: GetParentResourceName() je undefined");
      return;
    }

    // Příprava URL
    const url = endpoint.startsWith('/') 
      ? `https://${resourceName}${endpoint}` 
      : `https://${resourceName}/${endpoint}`;


    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ data  }),
    }).catch((error) => {
      console.warn(`[Menu] NUI Fetch failed for ${endpoint}:`, error);
      return null;
    });

    if (!result) return;
    
    if (cb) {
      try {
        const jsonResult = await result.json();
        cb(jsonResult);
      } catch (error) {
        console.warn(`[Menu] Failed to parse JSON response from ${endpoint}:`, error);
      }
    }
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("Failed to fetch")) {
      return;
    }
    console.error(`[Menu] NUI Callback Error for ${endpoint}:`, error);
  }
};

export const debugCallback = (endpoint: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Menu Debug] ${endpoint}:`, data);
  }
};