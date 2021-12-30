using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cosmos.Blog.Commons.Utilities.Interface
{
    public interface  IExcelService
    {
        public object Export();
        public object Import();
    }
}
