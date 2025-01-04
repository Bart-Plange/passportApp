const Help = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First-Time Applicants */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">First-Time Applicants</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700">How do I apply for a passport?</p>
                <p className="text-gray-600">You can apply for your passport by filling out the application form on our website, providing the required documents, and attending an interview if necessary.</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">What documents do I need?</p>
                <p className="text-gray-600">You will need a government-issued ID, proof of citizenship, and a passport-sized photo. You can find a full list on our requirements page.</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">How long does the process take?</p>
                <p className="text-gray-600">It typically takes 6–8 weeks for processing. You can track your application status on our portal.</p>
              </div>
            </div>
          </div>

          {/* Frequent Travelers */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Frequent Travelers</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700">Can I expedite my passport renewal?</p>
                <p className="text-gray-600">Yes, we offer an expedited processing service for frequent travelers. You can opt for this service during the renewal process.</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">How do I check my passport status?</p>
                <p className="text-gray-600">You can check your passport status online by logging into your account on our website. You will also receive email notifications.</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">What if my passport is about to expire while I'm abroad?</p>
                <p className="text-gray-600">If you're abroad and your passport is about to expire, please contact your nearest embassy for urgent renewal assistance.</p>
              </div>
            </div>
          </div>

          {/* Family Applicants */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Family Applicants</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700">What’s required for a child’s passport?</p>
                <p className="text-gray-600">For a child’s passport, you will need the child’s birth certificate, both parents' IDs, and proof of citizenship.</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">How do we apply as a family?</p>
                <p className="text-gray-600">You can apply for all family members together through our Family Application portal. You can also download forms for offline use.</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">What if one parent is traveling and needs to apply alone?</p>
                <p className="text-gray-600">In such cases, a consent form from the absent parent will be required. You can find more details in the Family Application section.</p>
              </div>
            </div>
          </div>

          {/* Immigrants and Dual Citizens */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Immigrants and Dual Citizens</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700">What are the rules for dual citizens?</p>
                <p className="text-gray-600">Dual citizens can apply for a passport through the embassy or consulate of their country of citizenship. Detailed rules are available in the Dual Citizenship section of our website.</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">How long is my passport valid?</p>
                <p className="text-gray-600">Passports for dual citizens are typically valid for 5–10 years, depending on the country. You can check the specific rules for your country on our website.</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">What documentation do I need to renew?</p>
                <p className="text-gray-600">For renewal, you'll need your current passport, a passport photo, and proof of address. Specific requirements may vary based on nationality.</p>
              </div>
            </div>
          </div>

          {/* Elderly Applicants */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Elderly Applicants</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700">How can I apply easily?</p>
                <p className="text-gray-600">We offer simplified application forms and assistance for elderly applicants. You can also request help from our customer service team.</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">What help is available for older applicants?</p>
                <p className="text-gray-600">We provide support via phone, email, or in-person assistance at our local offices. There are also assistive features on our website.</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Can someone assist me with the forms?</p>
                <p className="text-gray-600">Yes, you can receive help filling out forms at our customer service desk or by calling our support line.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
