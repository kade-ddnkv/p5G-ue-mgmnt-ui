'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <div id='add-ue' style={{ display: "none" }}>
        <div className='bg-gray-800 bg-opacity-50 h-screen w-screen absolute'></div>
        <div onClick={() => {
          var elem = document.getElementById('add-ue')
          if (elem != null) {
            elem.style.display = "none";
          }
        }} className="flex h-screen w-full justify-center items-center absolute">
          <div className="2xl:w-5/12 2xl:h-4/5 bg-white rounded-md">
            <div className='px-8 py-4'>
              <p className='text-lg font-bold'>Add new UE manually</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen justify-center">
        <div className="2xl:w-6/12 2xl:h-screen bg-white">
          <div className="px-20 py-10">
            <p className="font-bold text-xl">User Equipment manager</p>
            <div className="flex flex-row justify-end mt-1">
              {/* <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Options
                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
              </div>
            </Menu> */}
              <div onClick={() => {
                var elem = document.getElementById('add-ue')
                if (elem != null) {
                  elem.style.display = "block";
                }
              }} className='cursor-pointer hover:bg-gray-200 rounded-full h-12 w-12 bg-gray-100 flex items-center justify-center'><PlusIcon className='h-5 w-5'></PlusIcon></div>
            </div>
            <div className="mt-10 w-full overflow-auto">
              <table className="w-full">
                <tr>
                  <th className="text-gray-400 font-semibold">Name</th>
                  <th className="text-gray-400 font-semibold">IMSI</th>
                  <th className="text-gray-400 font-semibold">Status</th>
                  <th className="text-gray-400 font-semibold">Usage (last 30d)</th>
                  <th></th>
                </tr>
                <tr>
                  <td>UE #1</td>
                  <td>208930000000001</td>
                  <td>Active</td>
                  <td>
                    <div className='flex flex-row items-center space-x-3'>
                      <div className="h-2 w-16 bg-gray-700"></div>
                      <p className='inline'>403 MiB</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Western cowhouse</td>
                  <td>208930000000002</td>
                  <td>Active</td>
                  <td>
                    <div className='flex flex-row items-center space-x-3'>
                      <div className="h-2 w-16 bg-gray-100"></div>
                      <p className='inline'>934 KiB</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Northern cowhouse</td>
                  <td>208930000000003</td>
                  <td>Active</td>
                  <td>
                    <div className='flex flex-row items-center space-x-3'>
                      <div className="h-2 w-16 bg-gray-200"></div>
                      <p className='inline'>20 MiB</p>
                    </div>
                  </td>
                </tr>
                {
                  [...Array(5)].map((e, i) => <tr>
                    <td>UE #{i + 2}</td>
                    <td>20893000000000{i + 4}</td>
                    <td>Inactive</td>
                    <td>
                      <div className='flex flex-row items-center space-x-3'>
                        <div className="h-2 w-16 bg-white outline outline-1 outline-gray-100"></div>
                        <p className='inline'>0</p>
                      </div>
                    </td>
                  </tr>)
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
