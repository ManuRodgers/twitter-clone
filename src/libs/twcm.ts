import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 *  @example
```
className={twcm(
          "toast-end toast toast-top rounded-xl",
          //#region  //*=========== open ===========
          [open === false ? ["hidden"] : ["block"]]
        )}
```
 * @description Merge tailwind utility classes with tailwind-merge and clsx to categorize them
 * @param {...ClassValue[]} classes
 */
export default function twcm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
