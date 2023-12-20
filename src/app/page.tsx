'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, PlusIcon, TrashIcon, PencilIcon, DocumentTextIcon, DocumentIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <div id='add-ue' style={{ display: "none" }} className='relative z-10'>
        <div className='bg-gray-800 bg-opacity-50 h-screen w-screen absolute'></div>
        <div onClick={() => {
          var elem = document.getElementById('add-ue')
          if (elem != null) {
            elem.style.display = "none";
          }
        }} className="flex h-screen w-full justify-center items-center absolute">
          <div onClick={(event) => {
            event.stopPropagation()
          }} className="xl:w-5/12 bg-white rounded-md">
            <div className='px-10 py-6'>
              <p className='text-lg font-bold'>Add new UE manually</p>
              <div className='flex flex-row mt-12 space-x-8'>
                <div className='w-8/12'>
                  <div className="grid gap-x-1 grid-cols-4 grid-rows-1 items-center">
                    <p>IMSI</p>
                    <input className="col-span-3 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="208930000000001"></input>
                  </div>
                  <div className="grid gap-y-2 gap-x-1 grid-cols-4 grid-rows-2 items-center mt-4">
                    <p>K</p>
                    <input className="col-span-3 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="548327912488348294384"></input>
                    <p>OPC</p>
                    <input className="col-span-3 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="548327912488348294384"></input>
                  </div>
                </div>
                <div className='bg-blue-600 w-4/12 px-6 py-2 text-white italic text-sm'>
                  <p>Something about Card Readers, private keys, SIM support, no eSIM support. </p>
                </div>
              </div>
              <div className='flex space-x-4 flex-row mt-12 justify-center'>
                <button className='border border-gray-300 rounded px-3 py-1 hover:bg-gray-100'>Cancel</button>
                <button className='border border-gray-400 rounded px-3 py-1 hover:bg-gray-100'>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen justify-center relative">
        <div className="2xl:w-6/12 2xl:h-screen bg-white overflow-clip relative">
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
              <div className='flex flex-row-reverse justify-start items-center'>
                <div onClick={() => {
                  var elem = document.getElementById('add-ue')
                  if (elem != null) {
                    elem.style.display = "block";
                  }
                }}
                  id='add-button'
                  className='cursor-pointer hover:bg-gray-200 rounded-full h-12 w-12 bg-gray-100 flex items-center justify-center'>
                  <PlusIcon className='h-5 w-5'></PlusIcon>
                </div>
                <div className='invisible hidden-button flex flex-row-reverse justify-start items-center'>
                  <div onClick={() => {
                    var elem = document.getElementById('add-ue')
                    if (elem != null) {
                      elem.style.display = "block";
                    }
                  }} className='cursor-pointer rounded-full h-10 w-10 bg-gray-100 mr-6 flex items-center justify-center'>
                    <PencilIcon className='h-5 w-5'></PencilIcon>
                  </div>
                  <div onClick={() => {
                    var elem = document.getElementById('listfileid')
                    if (elem != null) {
                      elem.click();
                    }
                  }} className='cursor-pointer rounded-full h-10 w-10 bg-gray-100 mr-4 flex items-center justify-center'>
                    <DocumentTextIcon className='h-5 w-5'></DocumentTextIcon>
                    <input id='listfileid' type='file' hidden />
                  </div>
                  <div onClick={() => {
                    var elem = document.getElementById('backupfileid')
                    if (elem != null) {
                      elem.click();
                    }
                  }} className='cursor-pointer rounded-full h-10 w-10 bg-gray-100 mr-4 flex items-center justify-center'>
                    <DocumentIcon className='h-5 w-5'></DocumentIcon>
                    <input id='backupfileid' type='file' hidden />
                  </div>
                </div>
              </div>
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
                  <td>
                    <div className='flex flex-row space-x-5'>
                      <PencilIcon className='cursor-pointer h-5 w-5 text-gray-600'></PencilIcon>
                      <TrashIcon className='cursor-pointer h-5 w-5 text-gray-600'></TrashIcon>
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
                  <td>
                    <div className='flex flex-row space-x-5'>
                      <PencilIcon className='cursor-pointer h-5 w-5 text-gray-600'></PencilIcon>
                      <TrashIcon className='cursor-pointer h-5 w-5 text-gray-600'></TrashIcon>
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
                  <td>
                    <div className='flex flex-row space-x-5'>
                      <PencilIcon className='cursor-pointer h-5 w-5 text-gray-600'></PencilIcon>
                      <TrashIcon className='cursor-pointer h-5 w-5 text-gray-600'></TrashIcon>
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
                    <td>
                      <div className='flex flex-row space-x-5'>
                        <PencilIcon className='cursor-pointer h-5 w-5 text-gray-600'></PencilIcon>
                        <TrashIcon className='cursor-pointer h-5 w-5 text-gray-600'></TrashIcon>
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
