// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { parseAsStringForAPI } from "../../lib/utils/tsv2json";
export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const result = await parseAsStringForAPI(req.body?.csv);
      result
        ? res.status(200).json(result)
        : res.status(500).json("Import Failed");
    } catch (e) {
      res.status(500).json(`Import failed. Reason :${e.message}`);
    }
  } else {
    res.status(404).json("Invalid Request");
  }
}
