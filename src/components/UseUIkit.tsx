'use client';

import {useEffect} from "react";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

export default function UseUIKit() {
  useEffect(() => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    UIkit.use(Icons);
  }, []);

  return null;
}