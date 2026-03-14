import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Wipuku</h2>
          <p className="text-gray-400 mb-4">
            品質と信頼のブランド
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Wipuku. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
