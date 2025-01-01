import axios from "axios";


export const getDatas = async <T>(resourch: string): Promise<T> => {
   try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_DB_HOST}/${process.env.NEXT_PUBLIC_APP_VERSION}/${resourch}`)

      return response.data.data
   } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Failed to fetch data");
   }
}

