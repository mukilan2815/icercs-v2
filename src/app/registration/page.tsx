import Link from 'next/link';

export default function Registration() {
  return (
    <div className='container pt-5 grid md:grid-cols-3 gap-10 h-max '>
      <div className='col-span-2'>
        <h3 className='text-2xl pb-5 font-black text-primary'>
          Registration Fees
        </h3>
        <table className=' table-auto border-collapse w-full'>
          <thead className=''>
            <tr className='*:border-black'>
              <th className='border px-4 py-2 text-center'>Categories</th>
              <th className='border px-4 py-2 text-center'>IEEE Members</th>
              <th className='border px-4 py-2 text-center'>IEEE Non-Members</th>
            </tr>
          </thead>
          <tbody className='text-gray-700'>
            <tr className='*:border-black'>
              <td className='border  px-4 py-2 text-center'>Indian Authors</td>
              <td className='border px-4 py-2 text-center'>8250 INR</td>
              <td className='border px-4 py-2 text-center'>8750 INR</td>
            </tr>
            <tr className='*:border-black'>
              <td className='border px-4 py-2 text-center'>Foreign Authors</td>
              <td className='border px-4 py-2 text-center'>160 USD</td>
              <td className='border px-4 py-2 text-center'>175 USD</td>
            </tr>
            {/* <tr className='*:border-black'>
              <td className='border px-4 py-2'>Industrial Delegates</td>
              <td className='border px-4 py-2'>6000 INR</td>
              <td className='border px-4 py-2'>7000 INR</td>
            </tr>
            <tr className='*:border-black'>
              <td className='border px-4 py-2'>Overseas Delegates</td>
              <td className='border px-4 py-2'>150 USD</td>
              <td className='border px-4 py-2'>175 USD</td>
            </tr> */}
          </tbody>
        </table>

        <h3 className='text-2xl pt-10 font-black text-primary'>
          Publication details
        </h3>
        <p className='pt-2'>
          Accepted papers will be submitted for inclusion in IEEE Xplore subject
          to meeting IEEE Xplore&apos;s scope and quality requirements.
        </p>
        <p className='pt-2'>
          Extended version of the selected papers will be recommended for SCIE
          journals
        </p>
        <h3 className='text-2xl pt-10 font-black text-primary'>
          Submission Link
        </h3>
        <Link
          href={'https://cmt3.research.microsoft.com/ICERCS2024'}
          className='pt-3 text-blue-600 underline'
        >
          https://cmt3.research.microsoft.com/ICERCS2024
        </Link>
      </div>
      <div className='p-2 text-white'>
        <div className='h-full w-full bg-primary rounded p-5'>
          <h3 className='text-2xl font-black text-secondary text-center'>
            Important Date&apos;s
          </h3>

          <div className='space-y-3'>
            <DateWithLabel date='15/10/2024' label='Full Paper Submission' />
            <DateWithLabel date='10/11/2024' label='Paper Acceptance' />
            <DateWithLabel
              date='20/11/2024'
              label='Camera Ready Paper Submission'
            />
            <DateWithLabel
              date='25/11/2024'
              label='Last Date for Registration Payment'
            />

            <div className='text-white text-center'>
              <p className='pt-2 text-lg font-bold'>Conference Date</p>
              <h4 className='text-xl'>12, 13 and 14th Dec, 2024</h4>
            </div>
          </div>

          <h3 className='text-2xl font-black pt-5 text-secondary text-center'>
            Online Payment Details
          </h3>
          <p className='text-center'>
            Use this link for payment <br />
            <Link href={'https://admissions.kifees.com/events/kahe/icercs'}>
              https://admissions.kifees.com/events/kahe/icercs
            </Link>
          </p>
          <div className='pt-3 flex items-center justify-center'>
            <img
              src='/images/paymentqr.png'
              alt='qr'
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DateWithLabel({ date, label }: { date: string; label: string }) {
  return (
    <div className='text-white text-center'>
      <p className='pt-2 text-lg font-bold'>{label}</p>
      <h4 className=''>{date}</h4>
    </div>
  );
}
